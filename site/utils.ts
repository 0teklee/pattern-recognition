export const getEnv = () => ({
  isPrd: process.env.SCOPE === "prd",
  isAlgo: process.env.SCOPE === "algo",
  isUIUX: process.env.SCOPE === "uiux",
});
