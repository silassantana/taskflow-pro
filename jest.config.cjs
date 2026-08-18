module.exports = {
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      tsconfig: {
        esModuleInterop: true,
        module: "commonjs",
        target: "ES2020"
      }
    }]
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/shared/$1"
  }
};
