/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    setupFiles: ["dotenv/config"],
    preset: "ts-jest",
    testEnvironment: "node",
    roots: [""],
    testMatch: ["**/*.test.ts"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  };
  