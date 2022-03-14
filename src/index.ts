#!/usr/bin/env node

import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { getLicense } from './getLicense.js';
import { describeOne } from './describeOne.js';
import chalk from 'chalk';
import support from './support.js';

const root = import.meta.url.replace('file://', '').replace('/bin/index.js', '');

const program = new commander.Command()
  .arguments('<license>')
  .option('-d,--describe', 'Display a description of a given license type')
  .option('-s,--strict', 'Make sure queried license matches a license instead of picking the most similar')
  .option('--log', 'Log the file instead of writing it')
  .option('-q,--quiet', "Don't write a completion message")
  .description('Adds a new license to your project.')
  .action(writeLicense);

program.parse(process.argv);

async function writeLicense(code: null | string, args: any, command: any): Promise<any> {
  let mostSimilarCode = '';
  let amt = 0;

  try {
    if (!command.args[0]) void console.log('A license is required');

    const license = code || (command.args.join(' ').trim() as string);

    if (!license) void console.log('A license is required');

    mostSimilarCode = determineMostSimilar(license, getAllLicenseCodes()).string;
    amt = determineMostSimilar(license, getAllLicenseCodes()).amount;

    if (!license && args.describe) {
      helpAll();
      return;
    }
    const licenseCode = getLicense(license);

    const file = getFile(licenseCode);

    if (args.log) {
      if (!args.quiet) process.stdout.write(file.license as string);
      return;
    }

    if (args.describe) {
      if (licenseCode) console.log(describeOne(file.description));
    }

    fs.writeFileSync(path.resolve('./LICENSE.txt'), file.license as any);

    if (!args.quiet) console.log(`Successfully wrote license. (${(file.description as any).id.toUpperCase()})`);
  } catch (err: any) {
    if (!args.quiet) {
      if (/license.+not supported/gi.test(err.message)) {
        if (args.strict) return console.log(`That license type is not supported. Did you mean "${mostSimilarCode}"?`);
        if (amt > 0.3) return writeLicense(mostSimilarCode, args, command);
      }
      console.log(err.message);
    }
  }
}

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

function getAllLicenseCodes() {
  const arr = [];
  for (const code of support) {
    arr.push(code.name);
    arr.push(code.fullname);
  }

  return arr;
}

function determineMostSimilar(str: string, strings: string[]) {
  let maximum = { string: 'none', similarity: 0 };

  loop: for (const string of strings) {
    if (maximum.similarity > similarity(string, str)) continue loop;

    maximum.similarity = similarity(str, string);
    maximum.string = string;
  }

  return { string: maximum.string, amount: maximum.similarity };
}

function similarity(s1: string, s2: string) {
  let longer = s1.toLowerCase();
  let shorter = s2.toLowerCase();
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  const longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / longerLength;
}

function editDistance(s1: string, s2: string) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
