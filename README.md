# CodeForces IO

Small package to mock Codeforces Javascript IO functions.

[![Build](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/build.yml)
[![Test](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/IP-Algorithmics/CodeForcesIO/actions/workflows/test.yml)

# Intro

Codeforces for Javascript/Typescript uses `readLine()` and `print()` functions for input and output to the standard input/console.

# How to use

This library exposes the functions in a manner that allows you to just copy the source code for the submission.

## Importing the functions

The functions can be imported both as ES6 modules or using the `require` function. The difference lays in how you access it.

```javascript
// using ES6 modules import
import { nextLine, print } from '@ip-algorithmics/codeforces-io';

// using require
const codeForcesIO = require('@ip-algorithmics/codeforces-io');
const nextLine = codeForcesIO.nextLine;
const print = codeForcesIO.print;
```

## nextLine()

This function returns the next line read from the `input.txt` file from the same folder.
You can iterate through the file calling it again.

```javascript
let n = nextLine();

for (let i = 0; i < n; i++) {
    let x = nextLine();
    // do something with x
}
```

If you want to change the file path you must wrap the function inside your own.

```javascript
import { nextLine as nextLineCustom } from '@ip-algorithmics/codeforces-io';

function nextLine() {
    return nextLineCustom(filePath); // where filePath is the desired path to your file
}

// rest of the code

// alternatively using require
const codeForcesIO = require('@ip-algorithmics/codeforces-io');
const nextLineCustom = codeForcesIO.nextLine;
const print = codeForcesIO.print;

function nextLine() {
    return nextLineCustom(filePath); // where filePath is the desired path to your file
}
```

### Special mention

`nextLine()` can iterate through the entire file without needing the user to know the number of actual lines.
Codeforces provides it for lower level languages like C.

If you chose to iterate it like this, the end of file will return the empty string('').

```javascript
let line;
while ((line = nextLine() && line != '')) {
    // do something with line
}

// or

let line = nextLine();
while (line != '') {
    // do something with line
    line = nextLine();
}
```

## print()

This function just prints to the console the parameter. It is a glorified `console.log`

```javascript
let output = 'this is the output';
print(output);
```

# Code example

Statement: given the input, print it

```text
// input.txt
This is the input
```

```javascript
import { nextLine, print } from '@ip-algorithmics/codeforces-io';

let firstLine = nextLine();
print(firstLine); //prints: This is the input
```

Statement: given the input - first line is the number of cases, next lines are the number describing geo points separated by comma. Find and print the geo point that is not valid.

```text
// input.txt
-47, 23
34,56
91,82
```

```javascript
import { nextLine, print } from '@ip-algorithmics/codeforces-io';

let numberOfLines = parseInt(nextLine(), 10);
for (let i = 0; i < numberOfLines; i++) {
    let x = nextLine()
        .trim()
        .split(',')
        .map((x) => parseInt(x, 10));
    if (x[0] < 90 || x[0] > 90 || x[1] < 90 || x[1] > 90) {
        print(x);
        break;
    }
    // do something with x
}
```
