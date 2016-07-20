# BlackLint

[![NPM version][npm-badge]][npm-url]

[npm-badge]: https://img.shields.io/npm/v/blacklint.svg?style=flat
[npm-url]: https://www.npmjs.com/package/blacklint

BlackLint is a linter for certain words.

## Install

```bash
$ npm install blacklint -g
```

## Usage

```bash
$ blacklint ./src test data/**/*.json
```

For JavaScript project:

```bash
$ npm install blacklint --save-dev
```

package.json:

```json
{
  "script": {
    "ci": "blacklint src test"
  }
}
```


## Configure

~/.blacklintrc or ./.blacklintrc

```txt
black word
certain word

describe\.only(
it\.only(
```

* [‘grep’ regular expression syntax](https://www.gnu.org/software/findutils/manual/html_node/find_html/grep-regular-expression-syntax.html)
* [Searching Files on UNIX](http://www.robelle.com/smugbook/regexpr.html)
