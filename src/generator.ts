#!/usr/bin/env node
import fs from 'fs';

const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 <path> [options]')
    .command('path', 'Creates a solution folder using the path')
    .example(
        '$0 ./TotallyAProblemToSolve',
        'Creates the folder TotallyAProblemToSolve in the current folder'
    )
    .alias('js', 'useJs')
    .nargs('js', 0)
    .describe('js', 'Use Javascript instead of Typescript')
    .alias('cjs', 'useCjs')
    .nargs('cjs', 0)
    .describe('cjs', 'Use require from CommonJs instead ES6 imports')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'File name, defaults to index')
    .alias('c', 'comment')
    .nargs('c', 1)
    .describe('c', 'File name, defaults to index')
    .help('h')
    .alias('h', 'help').argv;
// .epilog('copyright 2021')

const options = {
    path: argv._[0] ?? './New Solution',
    js: argv.js ?? false,
    cjs: argv.cjs ?? false,
    file: argv.file ?? 'index',
    comment: argv.comment ?? ''
};

function createFolderRecursively(path: string) {
    fs.mkdirSync(path, { recursive: true });
}

function createFile(path: string, file: string, content: string) {
    fs.writeFileSync(`${path}/${file}`, content);
}

const importLibrary = options.cjs
    ? "const { readline, print, testOutput, console } = require('@ip-algorithmics/codeforces-io');"
    : "import { readline, print, testOutput, console } from '@ip-algorithmics/codeforces-io';";

const file = options.js ? `${options.file}.js` : `${options.file}.ts`;
const content = `// ${options.comment}
${importLibrary}


testOutput();
${options.js ? '' : 'export {};'}
`;

createFolderRecursively(options.path);
createFile(options.path, 'input.txt', '');
createFile(options.path, 'output.txt', '');
createFile(options.path, file, content);
