#!/usr/bin/env node

import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { getLicense } from './getLicense.js';
import { describeOne } from './describeOne.js';
import { getAllLicenseCodes, getFile } from './getters.js';
import { helpAll } from './helpAll.js';
import { determineMostSimilar } from './similarity.js';
import { updatePackage } from './updatePackage.js';

const program = new commander.Command()
  .arguments('<license>')
  .option('-d,--describe', 'Display a description of a given license type')
  .option('-s,--strict', 'Make sure queried license matches a license instead of picking the most similar')
  .option('--log', 'Log the file instead of writing it')
  .option('-q,--quiet', "Don't write a completion message")
  .description('Adds a new license to your project.')
  .action(writeLicense);

program.parse(process.argv);

async function writeLicense(code: null | string, args: any, command: any): Promise<void> {
  const closest = {
    code: '',
    amt: 0,
  };

  try {
    if (!code || !command.args[0]) throw new Error('A license is required');

    const license = code || (command.args.join(' ').trim() as string);

    closest.code = determineMostSimilar(license, getAllLicenseCodes()).string;
    closest.amt = determineMostSimilar(license, getAllLicenseCodes()).amount;

    if (!license && args.describe) return void helpAll();

    const file = getFile(getLicense(code || license));

    if (args.log && !args.quiet) return void process.stdout.write(file.license as string);
    if (args.describe) return void console.log(describeOne(file.description));

    fs.writeFileSync(path.resolve('./LICENSE.txt'), file.license as any);

    const thereIsAPackage = fs.existsSync(path.resolve('./package.json'));
    console.log(thereIsAPackage);
    if (thereIsAPackage) updatePackage(getLicense(code || license));

    if (!args.quiet) console.log(`Successfully wrote license. (${(file.description as any).id.toUpperCase()})`);
  } catch (err: any) {
    if (/license.+not supported/gi.test(err.message)) {
      if (closest.amt < 0.3) return void writeLicense(closest.code, args, command);
      if (!args.quiet && args.strict) return void console.log(`That license type is not supported. Did you mean "${closest.code}"?`);

      console.log(err.message);
    }
  }
}
