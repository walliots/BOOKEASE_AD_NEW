const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg", "jsx", "js", "ts", "tsx", "cjs", "json"),
    sourceExts: [...resolver.sourceExts, "svg", "jsx", "js", "ts", "tsx", "cjs", "json"]
  };

  return config;
})();