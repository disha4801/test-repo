const { createJestConfig } = require('./test/createJestConfig');

module.exports = createJestConfig({
  displayName: 'repotest',
  projects: ['<rootDir>', '<rootDir>/packages/*'],
});
