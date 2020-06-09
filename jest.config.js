module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.css$': '<rootDir>/node_modules/jest-css-modules',
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
};
