const { getDefaultConfig } = require("metro-config");

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
};
