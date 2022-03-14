export default [
  {
    name: 'afl-3.0',
    accessor: /a(?:cademic(?:[ \-](?:f(?:ree(?:[ \-](?:license(?:[ \-]3(?:\.0)?)?|3(?:\.0)?))?|[ \-]3(?:\.0)?)?|3(?:\.0)?))?|fl[ \-]3(?:\.0)?|fl3?)/gim,
    fullname: 'Academic Free License 3.0',
  },
  {
    name: 'apache-2.0',
    accessor: /apache(?:[ \-](?:license|2(?:\.0)?)|2)?/gim,
    fullname: 'Apache 2.0',
  },
  { name: 'artistic-2.0', accessor: /artistic(?:[ \-](?:license|2(?:\.0)?)|2)?/gim, fullname: 'Artistic 2.0' },
  {
    name: 'bsl-1.0',
    accessor:
      /b(?:oost(?: software[ \-](?:license(?:[ \-]1(?:\.0)?)?|1(?:\.0)?)|\-(?:software(?: license 1(?:\.0)?|\-(?:license(?:[ \-]1(?:\.0)?)?|1(?:\.0)?)| license| 1(?:\.0)?)?|license(?:[ \-]1(?:\.0)?)?)| (?:license(?:[ \-]1(?:\.0)?)?|software))|sl[ \-]1(?:\.0)?|sl1(?:\.0)?)/gim,
    fullname: 'Boost Software License',
  },
  {
    name: 'bsd-2-clause',
    accessor:
      /b(?:erkely(?:(?: (?:software[ \-]d|d)ist(?:ribution[ \-]|[ \-])|\-(?:software[ \-]dist(?:ribution[ \-]|[ \-])|dist(?:ribution[ \-]|[ \-])))2(?:\.0)?|software(?:dist(?:ribution2(?:\.0)?|2(?:\.0)?)|2(?:\.0)?)|dist(?:ribution2(?:\.0)?|2(?:\.0)?)|\-software[ \-]2\.0|(?: (?:software )?2|\-2|2)(?:\.0)?| software\-2)|sd[ \-]2(?:\.0)?|sd2(?:\.0)?)/gim,
    fullname: 'Berkely Software Distribution 2 Clause',
  },
  {
    name: 'bsd-3-clause',
    accessor:
      /(b(?:erkely(?:(?: (?:software[ \-]d|d)ist(?:ribution[ \-]|[ \-])|\-(?:software[ \-]dist(?:ribution[ \-]|[ \-])|dist(?:ribution[ \-]|[ \-])))3(?:\.0)?|software(?:dist(?:ribution3(?:\.0)?|3(?:\.0)?)|3(?:\.0)?)|dist(?:ribution3(?:\.0)?|3(?:\.0)?)|\-software[ \-]3\.0|(?: (?:software )?3|\-3|3)(?:\.0)?| software\-3)|sd[ \-]3(?:\.0)?|sd3(?:\.0)?))|((b(?:erkely(?:(?:[ \-](?:software[ \-]d|d)|d)ist(?:ribution)?|software(?:dist(?:ribution)?)?|[ \-]software)?|sd)(?!(.+)|()2)))/gim,
    fullname: 'Berkely Software Distribution 3 Clause',
  },
  { name: 'cc0-1.0', accessor: /(cc0(?:[ \-]1(?:\.0)?|1(?:\.0)?)?)|(((creative(\s|-|)))((commons(\s|-|))|)(?=(.+|)0))/gim, fullname: 'Creative Commons 0' },
  {
    name: 'cc-by-sa-4.0',
    accessor: /(cc[ \-]by[ \-]4(?:\.0)?)|((?=sa)((creative(\s|-|)))((commons(\s|-|))|)(?=(.+|)4))/gim,
    fullname: 'Creative Commons By SA 4',
  },
  { name: 'cc-by-4.0', accessor: /(cc[ \-]by[ \-]4(?:\.0)?)|((?!sa)((creative(\s|-|)))((commons(\s|-|))|)(?=(.+|)4))/gim, fullname: 'Creative Commons By 4' },
  {
    name: 'wtfpl',
    accessor:
      /(?:d(?:o(?:(?: w(?:hat the fuck public |tf\-public\-)l| w(?:(?:hat the fuck |tf\-)l|tf l)| wtf public[ \-]l)icense| what[ \-]the\-fuck(?:[ \-](?:(?:public[ \-]l|l)icense|p(?:ublic|l)))?|\-w(?:hat[ \-]the[ \-]fuck(?:[ \-](?:(?:public[ \-]l|l)icense|p(?:ublic|l)))?|(?:tf[ \-]public[ \-]l|tf[ \-]l)icense|tf[ \-]public)| w(?:(?:(?:hat the fuck(?: public)?|tf\-public)|tf public)|hat the fuck pl))|(?:wtf[ \-]public[ \-]l|wtf[ \-]l)icense|wtf[ \-]public|wtfpl)|wtf[ \-](?:(?:public[ \-]l|l)icense|p(?:ublic|l))|w(?:(?:hat[ \-]the[ \-]fuck|tfpl)|tf))|(^fuck$)/gim,
    fullname: 'Do What the F*** You Want Public License',
  },
  {
    name: 'ecl-2.0',
    accessor: /e(?:ducational[ \-](?:community[ \-](?:license(?:[ \-]2(?:\.0)?)?|2(?:\.0)?)|license[ \-]2(?:\.0)?|2(?:\.0)?)|cl(?:[ \-]2(?:\.0)?)?)/gim,
    fullname: 'Educational Community License',
  },
  {
    name: 'epl-1.0',
    accessor: /e(?:clipse[ \-](?:(?:public[ \-]l|l)icense[ \-]1(?:\.0)?|(?:public[ \-]1|1)(?:\.0)?)|pl[ \-]1(?:\.0)?)/gim,
    fullname: 'Eclipse Public License 1',
  },
  {
    name: 'epl-2.0',
    accessor:
      /(e(?:clipse[ \-](?:(?:public[ \-]l|l)icense[ \-]2(?:\.0)?|(?:public[ \-]2|2)(?:\.0)?)|pl[ \-]2(?:\.0)?|pl))|(e(?:clipse(?:[ \-]public(?:[ \-]license)?)?|pl)(?!1))/gim,
    fullname: 'Eclipse Public License 2',
  },
  {
    name: 'eupl-1.1',
    accessor: /eu(?:ropean[ \-]union(?:[ \-](?:(?:public[ \-])?license|public))?|pl(?:[ \-]1\.1|(?:[ \-]1)?))/gim,
    fullname: 'European Union Public License',
  },
  {
    name: 'agpl-3.0',
    accessor: /a(?:ffero(?:[ \-]general[ \-](?:public[ \-])?license|(?:[ \-]general(?:[ \-]public)?)?)|gpl[ \-]?)/gim,
    fullname: 'Affero General Public License',
  },
  { name: 'gpl-2.0', accessor: /(gpl(\s|-|)2)|(GNU.+2)|((Ge\w+).+2)/gim, fullname: 'General Public License 2' },
  { name: 'gpl-3.0', accessor: /(gpl(\s|-|)3)|(GNU.+3)|((Ge\w+).+3)/gim, fullname: 'General Public License 3' },
  { name: 'lgpl-2.1', accessor: /(lgpl(\s|-|)2)|(GNU(\s|-|)Les\w+.+2)|(Les\w+(\s|-|)Ge\w+.+2)/gim, fullname: 'GNU Lesser General Public License 1.1' },
  { name: 'lgpl-3.0', accessor: /lgpl(\s|-|)(3|)|(GNU(\s|-|)Les\w+.+(3|))|(Les\w+(\s|-|)Ge\w+.+(3|))/gim, fullname: 'GNU Lesser General Public License 3' },
  { name: 'isc', accessor: /isc/gim, fullname: 'ISC' },
  { name: 'lppl-1.3c', accessor: /lppl|(latex)/gim, fullname: 'LaTeX Project Public License' },
  { name: 'ms-pl', accessor: /ms-pl|Microsoft/gim, fullname: 'Microsoft Public License' },
  { name: 'mit', accessor: /mit/gim, fullname: 'MIT' },
  { name: 'mpl-2.0', accessor: /mpl|Mozilla/gim, fullname: 'Mozilla Public License 2' },
  { name: 'osl-3.0', accessor: /osl|(Open(\s|-|)s)/gim, fullname: 'Open Software License 3' },
  { name: 'postgresql', accessor: /post\w+/gim, fullname: 'Postgresql' },
  { name: 'ofl-1.1', accessor: /ofl|(Open(\s|-|)f)/gim, fullname: 'SIL Open Font License' },
  { name: 'ncsa', accessor: /ncsa/gim, fullname: 'NCSA' },
  { name: 'unlicense', accessor: /unlicense/gim, fullname: 'Unlicense' },
  { name: 'zlib', accessor: /zlib/gim, fullname: 'ZLib' },
] as const;
