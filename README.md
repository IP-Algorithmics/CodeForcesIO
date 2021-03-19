# CodeForces IO

Small package to mock Codeforces Javascript IO functions.

[![Build](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/build.yml)
[![Test](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/test.yml)
[![NPM](https://nodei.co/npm/@ip-algorithmics/codeforces-io.png?mini=true)](https://npmjs.org/package/@ip-algorithmics/codeforces-io)

# Install

`npm i @ip-algorithmics/codeforces-io`

# Intro

Codeforces for Javascript/Typescript uses `readline()` and `print()` functions for input and output to the standard input/console.

# How to use

This library exposes the functions in a manner that allows you to just copy the source code for the submission.

## Importing the functions

The functions can be imported both as ES6 modules or using the `require` function. The difference lays in how you access it.

```javascript
// using ES6 modules import - you need to have the "module" property set to "commonjs" in the package.json
import { readline, print } from '@ip-algorithmics/codeforces-io';

// using require
const codeForcesIO = require('@ip-algorithmics/codeforces-io');
const readline = codeForcesIO.readline;
const print = codeForcesIO.print;

// alternative
const { readline, print, console } = require('@ip-algorithmics/codeforces-io');
```

## readline()

This function returns the next line read from the `input.txt` file from the same folder.
You can iterate through the file calling it again.

```javascript
let n = readline();

for (let i = 0; i < n; i++) {
    let x = readline();
    // do something with x
}
```

If you want to change the file path you must wrap the function inside your own.

```javascript
import { readline as readlineCustom } from '@ip-algorithmics/codeforces-io';

function readline() {
    return readlineCustom(filePath); // where filePath is the desired path to your file
}

// rest of the code

// alternatively using require
const codeForcesIO = require('@ip-algorithmics/codeforces-io');
const readlineCustom = codeForcesIO.readline;
const print = codeForcesIO.print;

function readline() {
    return readlineCustom(filePath); // where filePath is the desired path to your file
}
```

### Special mention

`readline()` can iterate through the entire file without needing the user to know the number of actual lines.
Codeforces provides it for lower level languages like C.

If you chose to iterate it like this, the end of file will return the empty string('').

```javascript
let line;
while ((line = readline() && line != '')) {
    // do something with line
}

// or

let line = readline();
while (line != '') {
    // do something with line
    line = readline();
}
```

## print()

This function just prints to the console the parameter. It is a glorified `console.log` that saves whatever is printed in memory. You can then use `testOutput()` to print to the screen if the test passed or failed.

```javascript
let output = 'this is the output';
print(output);
```

## testOutput()

This is an optional function reads the `output.txt` from the same folder and iterates through the `print` statements to check if they match the outputs.
You can set a different path passing it as a parameter.

## console

If you use Typescript you will notice that the `print` function is already declared in the `DOM` library. To circumvent this issue I exported `console.log` as `print` and the entire `console` object as `console` for the cases where is needed for tracing or debugging.

# Code example

Statement: given the input, print it

```text
// input.txt
This is the input
```

```javascript
import { readline, print } from '@ip-algorithmics/codeforces-io';

let firstLine = readline();
print(firstLine); //prints: This is the input
```

Statement: given the input - first line is the number of cases, next lines are the number describing geo points separated by comma. Find and print the geo point that is not valid.
`input.txt`

```text
3
-47,23
34,56
91,82
```

`output.txt`

```text
-47,23
```

```javascript
const { readline, print, testOutput } = require('@ip-algorithmics/codeforces-io');

let numberOfLines = parseInt(readline(), 10);
for (let i = 0; i < numberOfLines; i++) {
    let x = readline()
        .trim()
        .split(',')
        .map((y) => parseInt(y, 10));

    if ((x[0] < 90 && x[0] > -90) || (x[1] < 90 && x[1] > -90)) {
        print(x[0] + ',' + x[1]);
        break;
    }
}

testOutput(); // Result Passed
```

# Solution generator

You can use this feature in 2 ways:

-   Without installing globally the library using `npx @ip-algorithmics/codeforces-io`.
-   Installing globally the library `npm i -g @ip-algorithmics/codeforces-io` and then using `cf` in the command line.

## Parameters

-   `path` - the path to the solution. E.g. `./ProblemA`. Defaults to `./New Solution`.
-   `--f` or `--file` - the name of the js/ts file to create. E.g. `mainFile`. Defaults to `index`.
-   `--js` - Uses `.js` extension instead of `.ts`
-   `--cjs` - Uses `require` instead of ES6 `import`/`export`
-   `--c` or `--comment` - Adds a comment at the beginning of the file. E.g. the link to the problem.

## Usage examples

-   `npx @ip-algorithmics/codeforces-io ./ProblemA --js --cjs`
-   `cf ./ProblemA --js --cjs`
-   `cf ./ProblemA`
-   `cf ./ProblemA --c http://link.to.problem`

# Typescript ideas

Codforces uses ES5 internally in both node and V8 so it has problems with `const`, `let` and features like spreading an array.
Personally I found that the best solution is to:

-   add in the `package.json` the following script ` "build": "tsc --module es6 --moduleResolution node"` using it like `npm run build <path>`
-   manually run `tsc --module es6 --moduleResolution node <path>`

# Future plans

-   Problem folder generator - generates folder, input.txt, output.txt, index.ts or index.js, in input puts link to problem, and template imports, and test - Completed

# Additional Resources

[CodeForces Solutions](https://github.com/IP-Algorithmics/CodeForces)
[Codeforces - How to use Typescript/Javascript like a pro](https://dev.to/ipreda/codeforces-how-to-use-typescript-javascript-like-a-pro-1cjo)

# Changelog

## 1.1.1

Added solution generator capabilities.

## 1.0.12

Added `testOutput()` function.
