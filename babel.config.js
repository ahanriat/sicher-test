module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: "./src",
          extensions: [".ts", ".tsx"],
          alias: {
            components: "./src/components",
            assets: "./assets"
          }
        }
      ]
    ]
  };
};
