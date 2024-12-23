/** @type {import('jest').Config} */
const config = {
  preset: "@vue/cli-plugin-unit-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest", // Transform .vue files with vue3-jest
    "^.+\\.js$": "babel-jest", // Transform .js files with esbuild-jest for V8 support
  },
  testEnvironment: "jsdom", // Set the test environment to jsdom for Vue components
  moduleFileExtensions: ["js", "json", "vue"],
  testMatch: ["**/__tests__/**/*.test.js"],
  transformIgnorePatterns: [
    "node_modules/(?!axios)", // Ensure that axios is transformed
  ],
};

module.exports = config;
