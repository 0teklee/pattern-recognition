export const getEnv = () => ({
  isRoot:
    process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "production",
  isAlgo: process.env.NODE_ENV === "dev:algo",
  isUIUX: process.env.NODE_ENV === "dev:uiux",
});
