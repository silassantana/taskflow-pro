module.exports = {
  roots: ["<rootDir>/server/src", "<rootDir>/client/src", "<rootDir>/tasks"],
  transform: {
    "^.+\\.(ts|tsx)": ["ts-jest", { tsconfig: { module: "commonjs" } }]
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/shared/$1"
  }
};