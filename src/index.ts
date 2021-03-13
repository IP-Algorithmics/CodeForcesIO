import lineByLine from 'n-readlines';

let liner;

export function nextLine(path = './input.txt'): string {
    if (!liner) liner = new lineByLine(path);
    const line = liner.next();
    return line === false ? '' : line.toString('ascii');
}

export function print(...args: any[]) {
    console.log(...args);
}
