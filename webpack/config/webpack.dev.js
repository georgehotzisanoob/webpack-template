// Core
import { merge } from "webpack-merge";

// Constants
import { DIST_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Dev Config
export default () => {
  return merge(getCommonConfig(), {
    mode: "development",
    output: {
      filename: "[name].bundle.js",
      path: DIST_DIR,
    },
  });
};
