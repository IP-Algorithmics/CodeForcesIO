import lineByLine from 'n-readlines';
import path from 'path';

let liner: lineByLine;
const callerFunction = require?.main?.filename ?? module.parent?.filename ?? __filename;
const pathToInput = path.format({
    root: '/',
    dir: path.dirname(callerFunction),
    base: 'input.txt'
});

export function nextLine(path = pathToInput): string {
    if (!liner) liner = new lineByLine(path);
    const line = liner.next();
    return line === false ? '' : line.toString('ascii');
}

export function print(...args: any[]) {
    console.log(...args);
}
