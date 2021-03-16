module.exports = {
  rootDir: '../',
  preset: 'react',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/test/jest.setup.js',
  ],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
  //transformIgnorePatterns: [`node_modules/(?!${packagesToTransform})/`],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
}
