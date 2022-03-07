#!/usr/bin/env node

import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { getLicense } from './getLicense.js';
import { describeOne } from './describeOne.js';
import chalk from 'chalk';

const root = import.meta.url.replace('file://', '').replace('/bin/index.js', '');

const program = new commander.Command()
  .arguments('[license]')
  .option('-d,--describe', 'Display a description of a given license type')
  .option('--log', 'Log the file instead of writing it')
  .option('-q,--quiet', "Don't write a completion message")
  .description('Adds a new license to your project.')
  .action(async (license: ReturnType<typeof getLicense>, args: any) => {
    try {
      if (!license) return;

      if (!license && args.describe) {
        helpAll();
        return;
      }
      license = getLicense(license);

      const file = getFile(license);

      if (args.log) {
        if (!args.quiet) process.stdout.write(file.license as string);
        return;
      }

      if (args.describe) {
        if (license) console.log(describeOne(file.description));

        return;
      }

      fs.writeFileSync(path.resolve('./LICENSE.txt'), file.license as any);

      if (!args.quiet) console.log(`Successfully wrote license. (${(file.description as any).id.toUpperCase()})`);
    } catch (err: any) {
      if (!args.quiet) console.log(err);
    }
  });

program.parse(process.argv);

function getFile(license: ReturnType<typeof getLicense>) {
  const all = JSON.parse(fs.readFileSync(root + '/licenses/out.json', 'utf8'));

  const info: { [key: string]: {} } = {};

  info.license = all.licenses[license];
  info.description = all.descriptions[license];

  return info;
}

function getAll() {
  return JSON.parse(fs.readFileSync(root + '/licenses/out.json', 'utf8'));
}

function helpAll() {
  const all = getAll().descriptions;

  const string = Object.keys(all)
    .map(
      (key) =>
        `    ${chalk.red('-')} ${all[key].name} ${all[key].id ? chalk.magenta('(') + chalk.blue(all[key].id) + chalk.magenta(') ') : ''}${chalk.bold(
          all[key].year + '',
        )}`,
    )
    .join('\n');
  const str = `
  ${chalk.bold('Supported Licenses:')}

${string}
    `;

  console.log(str);
}
