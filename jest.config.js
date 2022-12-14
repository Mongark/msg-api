/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    preset: "ts-jest",

    clearMocks: false,
    maxWorkers: "100%",
    verbose: true,

    transform: {
        "^.+\\.ts?$": ["@swc/jest"],
    }
};
