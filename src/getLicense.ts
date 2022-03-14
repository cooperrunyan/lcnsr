import licenses from './support.js';

export function getLicense(str: string) {
  for (const license of licenses) {
    if (license.accessor.test(str)) return license.name;
    if (license.accessor.test(str)) return license.name;
  }

  throw new Error('That license type is not supported (check your spelling) "' + str + '"');
}
