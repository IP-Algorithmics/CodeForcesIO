import { readline } from '../';

test('read input', () => {
    const fs = require('fs');
    const fileNames: string[] = [];
    fs.readdirSync(__dirname).forEach((file) => {
        fileNames.push(file);
    });
    expect(fileNames.some((x) => x === 'input.txt'));

    const numberOfLines = parseInt(readline(), 10);
    expect(numberOfLines === 5);
    for (let i = 0; i < numberOfLines; i++) {
        const x = parseInt(readline(), 10);
        expect(x === i);
    }
});
