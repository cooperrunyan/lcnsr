import * as fs from 'fs';
import licenses from '../support.js';

const data = {
  licenses: getLicenses(),
  descriptions: getLicenseDescriptions(),
};

write(data);

function write(data: object) {
  fs.writeFileSync('./licenses/out.json', JSON.stringify(data));
}

type LicenseContent = {
  description: string;
  permissions: (keyof ReturnType<typeof getDescTypes>['permissions'])[];
  conditions: (keyof ReturnType<typeof getDescTypes>['conditions'])[];
  limitations: (keyof ReturnType<typeof getDescTypes>['limitations'])[];
};

function getLicenses() {
  const info: { [key: string]: string } = {};

  for (const license of licenses) {
    const content = fs.readFileSync(`./licenses/src/${license.name}.txt`, 'utf8');
    info[license.name] = content;
  }
  return info;
}

function getLicenseDescriptions() {
  const descriptions = getDescTypes();
  const info: { [key: string]: any } = {};
  for (const license of licenses) {
    const content: LicenseContent = JSON.parse(fs.readFileSync(`./licenses/src/descriptions/${license.name}.json`, 'utf8'));

    info[license.name] = {
      ...content,
      permissions: [],
      limitations: [],
      conditions: [],
    };

    for (const permission of content.permissions) {
      const index = content.permissions.indexOf(permission);
      if (descriptions.permissions[permission]) info[license.name].permissions[index] = descriptions.permissions[permission];
    }

    for (const limitation of content.limitations) {
      const index = content.limitations.indexOf(limitation);
      if (descriptions.limitations[limitation]) info[license.name].limitations[index] = descriptions.limitations[limitation];
    }

    for (const condition of content.conditions) {
      const index = content.conditions.indexOf(condition);
      if (descriptions.conditions[condition]) info[license.name].conditions[index] = descriptions.conditions[condition];
    }
  }
  return info;
}

function getDescTypes() {
  return {
    permissions: {
      'commercial-use': {
        label: 'Commercial use',
        detail: 'License material and derivatives can be used for commercial use.',
      },
      distribution: {
        label: 'Distribution',
        detail: 'License material may be disctributed.',
      },
      modification: {
        label: 'Modification',
        detail: 'License material may be modified.',
      },
      sublicense: {
        label: 'Sublicense',
        detail: 'The ability for you to grant/extend a license to the software.',
      },
      'patent-use': {
        label: 'Patent use',
        detail: 'License grants an express grant of patent rights from contributors.',
      },
      'private-use': {
        label: 'Private use',
        detail: 'License material may be modified and used in private.',
      },
      'place-warranty': {
        label: 'Warranty',
        detail: 'The ability to place warranty on the software licensed.',
      },
      warranty: {
        label: 'Warranty',
        detail: 'License grants ability to place warranty on the software licensed.',
      },
    },
    conditions: {
      'disclose-source': {
        label: 'Disclose source',
        detail: 'Source code must be distributed when license material is published.',
      },
      'license-and-copyright-notice': {
        label: 'License and Copyright Notice',
        detail: 'A copy of the license and copyright notice must be included with the license material.',
      },
      'same-license': {
        label: 'Same License',
        detail:
          'Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used.',
      },
      'state-changes': {
        label: 'State changes',
        detail: 'Changes made to the licensed material must be documented.',
      },
      'network-use-is-distribution': {
        label: 'Network use is distribution',
        detail: 'Users who interact with the licensed material via network are given the right to receive a copy of the source code.',
      },
      rename: {
        label: 'Rename',
        detail: 'Must rename the license if you change its terms.',
      },
      'include-original': {
        label: 'Include original',
        detail: 'Copies of the original software or instructions to obtain copies must be distributed with the software.',
      },
      'give-credit': {
        label: 'Give credit',
        detail: 'Explicit credit to the author is required when distributing the software.',
      },
      'include-notice': {
        label: 'Include notice',
        detail:
          'If the library has a "NOTICE" file with attribution notes, you must include that NOTICE when you distribute. You may append to this NOTICE file.',
      },
      'compensate-for-damages': {
        label: 'Compensate for damages',
        detail:
          'If you include the software in a commercial product you must defend and compensate the EPL contributor from lawsuits/damages caused by your commercial offering.',
      },
      'include-install-instructions': {
        label: 'Include install instructions',
        detail: 'Build & install instructions are required.',
      },
      'same-license-library': {
        label: 'Same License (library)',
        detail:
          'Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used, or this condition may not apply to works that use the licensed material as a library.',
      },
      'same-license-file': {
        label: 'Same License (file)',
        detail:
          'Modifications of existing files must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used.',
      },
    },
    limitations: {
      liability: {
        label: 'Liability',
        detail: 'License includes a limitation of liability.',
      },
      'trademark-use': {
        label: 'Trademark use',
        detail: 'Does NOT grant trademark rights.',
      },
      warranty: {
        label: 'Warranty',
        detail: 'This license does not provide any warranty',
      },
      sublicense: {
        label: 'Sublicense',
        detail: 'Unable to grant/extend a license to the software',
      },
      'patent-use': {
        label: 'Patent Use',
        detail: 'This license does not allow the creation of patents',
      },
      modification: {
        label: 'Modification',
        detail: 'License material may not be modified',
      },
    },
  };
}
