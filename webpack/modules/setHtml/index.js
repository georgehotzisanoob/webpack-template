// Core
import HTMLWebpackPlugin from "html-webpack-plugin";

// Constants
import { HTML_DIR } from "../../utils/constants";

// Set Html
export const setHtml = () => {
  return {
    plugins: [
      new HTMLWebpackPlugin({
        template: `${HTML_DIR}/index.html`,
        title: "🌟 webpack",
      }),
    ],
  };
};
