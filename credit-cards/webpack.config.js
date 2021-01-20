const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codesandtags",
    projectName: "credit-cards",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8083,
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
