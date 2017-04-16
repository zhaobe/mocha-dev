# mocha-dev
Simple mocha JS development

[![Travis](https://travis-ci.org/zhaobe/mocha-dev.svg?branch=master)](https://travis-ci.org/zhaobe/mocha-dev)

## Setup Mocha from scratch
- `npm install -g mocha`, for global purposes...
- `npm install request --save`
- `mkdir test`
- `touch test/test.js`

## Usage with Mocha
- `mocha` runs your test/test.js file and tells if your test blocks pass or not using the global mocha install

## Setup coverage with Istanbul from scratch
- `npm install -g istanbul`, for global purposes...

## Usage with Istanbul
- make sure you have mocha installed globally
- then run `istanbul cover path/to/_mocha test/test.js`, this should generate a coverage directory with a coverage.json and other files
- if you open `/coverage/lcov-report/index.html` then you can see a graphical representation of your coverage

## More efficient and specific to this project
- `npm install` should just install what is in the package.json
- `npm test` should run the local install of mocha in `node_modules`
- for Istanbul, I have added the long command to generate the coverage report with the local dependencies in `/node_modules`
- just run `npm run coverage`, and this should generate a coverage directory with a coverage.json and other files
- if you open `/coverage/lcov-report/index.html` then you can see a graphical representation of your coverage
