# mocha-dev
Simple mocha JS development

[![Travis](https://travis-ci.org/zhaobe/mocha-dev.svg?branch=master)](https://travis-ci.org/zhaobe/mocha-dev)

## Setup Mocha
- `npm install -g mocha`
- `npm install request --save`
- `mkdir test`
- `touch test/test.js`

## Usage
- `mocha` runs your test/test.js file and tells if your test blocks pass or not

## Setup coverage with Istanbul
- `npm install -g istanbul`

## Usage with Istanbul
- make sure you have mocha installed globally
- then run `istanbul cover path/to/_mocha test/test.js`, this should generate a coverage directory with a coverage.json and other files
- if you open `/coverage/lcov-report/index.html` then you can see a graphical representation of your coverage
