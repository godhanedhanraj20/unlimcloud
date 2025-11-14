const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/__tests__/**/*.{ts,tsx}',
    '!src/app/layout.tsx',
    '!src/app/page.tsx',
    '!src/store/index.ts',
    '!src/services/VersionService.ts'
  ],
}

module.exports = createJestConfig(customJestConfig)
