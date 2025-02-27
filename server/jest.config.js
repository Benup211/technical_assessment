/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "node",
    testMatch: ["<rootDir>/src/tests/**/*.test.ts"],
    forceExit: true,
    transform: {
      "^.+.tsx?$": ["ts-jest",{}],
    },
  };