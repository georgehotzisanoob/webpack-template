// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../utils/constants";

// Modules
import * as modules from "../modules/";

// Common Config
export default () => {
  return merge(
    {
      entry: [SRC_DIR],
    },
    modules.setHtml()
  );
};
