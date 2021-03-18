import lineByLine from 'n-readlines';
import path from 'path';

let liner: lineByLine;
const callerFunction = require?.main?.filename ?? module.parent?.filename ?? __filename;
const pathToInput = path.format({
    root: '/',
    dir: path.dirname(callerFunction),
    base: 'input.txt'
});

const pathToOutput = path.format({
    root: '/',
    dir: path.dirname(callerFunction),
    base: 'output.txt'
});

const printedStatements: string[] = [];

/**
 * Reads the `input.txt` file from the same folder and returns it line by line. Multiple calls to this functions should be made to scan the entire file.
 * @param path - Path to the input file. Optional, defaults to ./input.txt
 * @returns return the next line of the read file or empty string on End of File - This is by design, on Algorithmic problems inputs are usually contiguous
 */
export function readline(path = pathToInput): string {
    if (!liner) liner = new lineByLine(path);
    const line = liner.next();
    return line === false ? '' : line.toString('ascii');
}

/**
 * Prints to console the parameters
 * @param args - any
 */
export function print(...args: any[]) {
    const stringArgs = [...args].map((x) => `${x}`);
    printedStatements.push(...stringArgs);
    console.log(...args);
}

/**
 * Reads the `output.txt` file from the same folder and compares the content with what was printed to the console.
 * @param path - Path to the output file. Optional, defaults to ./output.txt
 */
export function testOutput(path = pathToOutput) {
    liner = new lineByLine(path);
    let hasPassed = true;
    printedStatements.forEach((statement) => {
        const output = readline(path);
        if (output !== statement) hasPassed = false;
    });
    if (hasPassed) {
        console.log('\x1b[36m%s\x1b[0m', 'Passed');
    } else {
        console.log('\x1b[35m%s\x1b[0m', 'Failed');
    }
}

const konsole = console;
export { konsole as console };
