import chalk from 'chalk';
import { getAll } from './getters.js';

export function helpAll() {
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
