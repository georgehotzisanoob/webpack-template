module.exports = (api) => {
  console.log();
  if (api.env("test")) {
    return {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
      ],
    };
  }
};
