export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
    },
    transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
    testMatch: ['**/src/__tests__/**/*.[jt]s?(x)', '**/src/?(*.)+(spec|test).[tj]s?(x)']
};
