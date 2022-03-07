# lcnsr

###### Cooper Runyan

This is a code-licensing-help cli that is designed to be lightweight and efficent.

### To write a license

```bash
$ lcnsr <license>
```

```bash
$ lcnsr epl
```

```bash
$ lcnsr mit
```

```bash
$ lcnsr MIT
```

License detection is based off of RegEx, so small typos can be ignored.

### To get info

To list all licenses, run:

```bash
$ lcnsr --describe # Can be replaced with `-d`
```

To get information about a single license, run:

```bash
$ lcnsr <license> -d
```

```bash
$ lcnsr epl -d
```

```bash
$ lcnsr -d epl
```
