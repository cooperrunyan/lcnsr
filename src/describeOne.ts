import chalk from 'chalk';

export function describeOne(description: any) {
  let maxPermissionLength = 0;
  let maxLimitationLength = 0;
  let maxConditionLength = 0;

  description.permissions.forEach((permission: { [key: string]: string }) => {
    maxPermissionLength = Math.max(permission.label.length, maxPermissionLength);
  });

  description.limitations.forEach((limitation: { [key: string]: string }) => {
    maxLimitationLength = Math.max(limitation.label.length, maxLimitationLength);
  });

  description.conditions.forEach((condition: { [key: string]: string }) => {
    maxConditionLength = Math.max(condition.label.length, maxConditionLength);
  });

  const str = `
  ${chalk.bold(description.name)} ${description.id ? chalk.yellow('(') + chalk.magenta(description.id) + chalk.yellow(')') : ''}
  Created in ${chalk.yellow(description.year + '')}

  ${chalk.bold(`Description:`)}

    ${description.description.split('\n').join(`\n     `)}

  ${chalk.bold(`Permissions:`)}

${
  description.permissions
    .map(
      (permission: { [key: string]: string }) =>
        `    ${chalk.blue(permission.label.padEnd(maxPermissionLength, ' '))}  ${chalk.red(`-`)} ${permission.detail
          .split('\n')
          .join(`\n      ${''.padEnd(maxPermissionLength, ' ')}`)}`,
    )
    .join('\n') || '    None'
}

  ${chalk.bold(`Limitations:`)}

${
  description.limitations
    .map(
      (limitation: { [key: string]: string }) =>
        `    ${chalk.blue(limitation.label.padEnd(maxLimitationLength, ' '))}  ${chalk.red(`-`)} ${limitation.detail
          .split('\n')
          .join(`\n      ${''.padEnd(maxLimitationLength, ' ')}`)}`,
    )
    .join('\n') || '    None'
}

  ${chalk.bold(`Conditions:`)}

${
  description.conditions
    .map(
      (condition: { [key: string]: string }) =>
        `    ${chalk.blue(condition.label.padEnd(maxConditionLength, ' '))}  ${chalk.red(`-`)} ${condition.detail
          .split('\n')
          .join(`\n      ${''.padEnd(maxConditionLength, ' ')}`)}`,
    )
    .join('\n') || '    None'
}
`;

  return str;
}
