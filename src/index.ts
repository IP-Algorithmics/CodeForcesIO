import lineByLine from 'n-readlines';
import path from 'path';

let liner: lineByLine;
const callerFunction = require?.main?.filename ?? module.parent?.filename ?? __filename;
const pathToInput = path.format({
    root: '/',
    dir: path.dirname(callerFunction),
    base: 'input.txt'
});

/**
 * Reasd a the input.txt file and returns it line by line. Multiple calls to this functions should be made to scan the entire file.
 * @param path - Path to the file. Optional, defaults to ./input.txt
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
    console.log(...args);
}

const konsole = console;
export { konsole as console };
