import fs from 'fs';
import support from './support.js';

const root = import.meta.url.replace('file://', '').replace('/bin/getters.js', '');

export function getFile(license: string) {
  const all = JSON.parse(fs.readFileSync(root + '/licenses/out.json', 'utf8'));

  const info: { [key: string]: {} } = {};

  info.license = all.licenses[license];
  info.description = all.descriptions[license];

  return info;
}

export function getAll() {
  return JSON.parse(fs.readFileSync(root + '/licenses/out.json', 'utf8'));
}

export function getAllLicenseCodes() {
  const arr = [];
  for (const code of support) {
    arr.push(code.name);
    arr.push(code.fullname);
  }

  return arr;
}
