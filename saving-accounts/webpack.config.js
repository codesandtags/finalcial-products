const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codesandtags",
    projectName: "saving-accounts",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8082,
      historyApiFallback: {
        index: "/index.html",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    // customizations can go here
  });
};
