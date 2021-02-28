// Core
import { merge } from "webpack-merge";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Prod Config
export default () => {
  return merge(getCommonConfig(), {
    mode: "production",
    output: {
      filename: "[name].bundle.js",
      path: BUILD_DIR,
    },
  });
};
