import fs from 'fs';
import path from 'path';

export function updatePackage(code: string) {
  let content = fs.readFileSync(path.resolve('package.json'), 'utf-8');

  if (/(?<="license":(?:\s|)")(.+)(?=")/gi.test(content)) {
    content = content.replace(/(?<="license":(?:\s|)")(.+)(?=")/gi, code);
  } else {
    const newContent = JSON.parse(content) as any;
    newContent.license = code;

    content = JSON.stringify(newContent, null, 2);
  }

  fs.writeFileSync(path.resolve('./package.json'), content);
}
