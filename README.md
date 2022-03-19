# Lcnsr

## Overview

Lcnsr (licenser) is a simple node CLI that aids in the creation of project
licenses, especially for people who aren’t familiar with open-source licensing.
It provides tools that give information about limitations, conditions, and
permissions that certain licenses allow and provide, and also a brief
description of the license. It’s as easy as running `npx lcnsr epl` and an
Eclipse Public License is written in your current working directory. But what if
I don’t know what that does? That’s easy, run `npx lcnsr <LICENSE> -d` to print
out a description of the license. But how do I know if a license is supported or
not? Run `npx lcnsr -d` to list all licenses, including their full name, ID, and
publication date.

---

##### 

## Installation

### Global installation

Note: Mac and Linux users need to preface the command with `sudo` for
permissions.

To install, run:

```bash
npm i -g lcnsr
```

##### 

### Alternatively

If you only want to run it once, and not globally install the package, run:

```bash
npx lcnsr
```

---

##### 

## Usage

```bash
lcnsr [options] [license]
```

##### 

### Arguments

| Name&nbsp;&nbsp;&nbsp;&nbsp; | Command&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Input&nbsp;Type | Default | Description                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| Describe                     | `-d`, `--describe`                                                                                | `boolean`       | `false` | Get help information for a given license.                                                                               |
| Strict                       | `-s`, `--strict`                                                                                  | `boolean`       | `true`  | Make sure queried license matches a license instead of picking the most similar. See How it works for more information. |
| Log                          | `--log`                                                                                           | `boolean`       | `false` | Print the license content to stdout instead of writing the file.                                                        |
| Quiet                        | `-q`, `--quiet`                                                                                   | `boolean`       | `false` | Don’t write any completion message                                                                                      |
| Find                         | `-f`, `--find`                                                                                    | `boolean`       | `false` | Query for a license code but don’t do anything with it.                                                                 |
| Version                      | `-v`, `--version`                                                                                 | none            | none    | Output the current version                                                                                              |

---

##### 

## How it works

Lcnsr matches and finds licenses based on RegEx, and is very good at getting the
correct license when inputted a wrong license name. Basically:

### Step 1: Regex Matching

Check if the input text matches any licenses prewritten RegEx. For example, the
RegEx for an **Eclipse Public License 2.0** is
`/(e(?:clipse[ \-](?:(?:public[ \-]l|l)icense[ \-]2(?:\.0)?|(?:public[ \-]2|2)(?:\.0)?)|pl[ \-]2(?:\.0)?|pl))|(e(?:clipse(?:[ \-]public(?:[ \-]license)?)?|pl)(?!1))/gi`,
which means that running any of the commands below will all return `epl-2.0`,
or, Eclipse Public License 2.0. An important note: all licenses that have
multiple supported versions will default to the newer one when a version is not
specified.

- `lcnsr -f epl`
- `lcnsr -f epl2`
- `lcnsr -f epl 2`
- `lcnsr -f epl 2.0`
- `lcnsr -f epl-2`
- `lcnsr -f epl-2.0`
- `lcnsr -f eclipse`
- `lcnsr -f 'eclipse license'`
- `lcnsr -f 'eclipse public'`
- `lcnsr -f 'eclipse public license'`
- `lcnsr -f 'eclipse public-license'`
- `lcnsr -f 'eclipsepublic-license'`

##### 

### Step 2: Most Similar Name

Sometimes, people make typos, and to make this program more simple, there is a
feature entitled “Most Similar Name.” If there isn’t a license that gets matched
by the query after RegEx detection, the program will look through all supported
licenses and return the most similar license name to the query.

---

##### 

## Supported licenses

| Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Full Name                                |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `AFL-3.0`                                                                                                        | Academic Free License 3.0                |
| `APACHE-2.0`                                                                                                     | Apache 2.0                               |
| `ARTISTIC-2.0`                                                                                                   | Artistic 2.0                             |
| `BSL-1.0`                                                                                                        | Boost Software License                   |
| `BSD-2-CLAUSE`                                                                                                   | Berkeley Software Distribution 2 Clause  |
| `BSD-3-CLAUSE`                                                                                                   | Berkeley Software Distribution 3 Clause  |
| `CC0-1.0`                                                                                                        | Creative Commons 0                       |
| `CC-BY-SA-4.0`                                                                                                   | Creative Commons By SA 4.0               |
| `CC-BY-4.0`                                                                                                      | Creative Commons By 4.0                  |
| `WTFPL`                                                                                                          | Do What the F*** You Want Public License |
| `ECL-2.0`                                                                                                        | Educational Community License            |
| `EPL-1.0`                                                                                                        | Eclipse Public License 1.0               |
| `EPL-2.0`                                                                                                        | Eclipse Public License 2                 |
| `EUPL-1.1`                                                                                                       | European Union Public License            |
| `AGPL-3.0`                                                                                                       | GNU Affero General Public License'       |
| `GPL-2.0`                                                                                                        | GNU General Public License 2             |
| `GPL-3.0`                                                                                                        | GNU General Public License 3             |
| `LGPL-2.1`                                                                                                       | GNU Lesser General Public License 1.1    |
| `LGPL-3.0`                                                                                                       | GNU Lesser General Public License 3      |
| `LPPL-1.3C`                                                                                                      | LaTeX Project Public License             |
| `ISC`                                                                                                            | ISC                                      |
| `MS-PL`                                                                                                          | Microsoft Public License                 |
| `MIT`                                                                                                            | MIT                                      |
| `MPL-2.0`                                                                                                        | Mozilla Public License 2                 |
| `OSL-3.0`                                                                                                        | Open Software License 3                  |
| `OFL-1.1`                                                                                                        | SIL Open Font License                    |
| `POSTGRESQL`                                                                                                     | Postgresql                               |
| `NCSA`                                                                                                           | NCSA                                     |
| `UNLICENSE`                                                                                                      | Unlicense                                |
| `ZLIB`                                                                                                           | ZLib                                     |
