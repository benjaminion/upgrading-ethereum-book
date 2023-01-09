"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var pluginDefaults = {
  className: "anchor",
  icon: true,
  offsetY: 0
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _Object$assign = Object.assign(pluginDefaults, pluginOptions),
      className = _Object$assign.className,
      icon = _Object$assign.icon,
      offsetY = _Object$assign.offsetY;

  var styles = "\n    ." + className + ".before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translateX(-100%);\n      padding-right: 4px;\n    }\n    ." + className + ".after {\n      display: inline-block;\n      padding-left: 4px;\n    }\n    h1 ." + className + " svg,\n    h2 ." + className + " svg,\n    h3 ." + className + " svg,\n    h4 ." + className + " svg,\n    h5 ." + className + " svg,\n    h6 ." + className + " svg {\n      visibility: hidden;\n    }\n    h1:hover ." + className + " svg,\n    h2:hover ." + className + " svg,\n    h3:hover ." + className + " svg,\n    h4:hover ." + className + " svg,\n    h5:hover ." + className + " svg,\n    h6:hover ." + className + " svg,\n    h1 ." + className + ":focus svg,\n    h2 ." + className + ":focus svg,\n    h3 ." + className + ":focus svg,\n    h4 ." + className + ":focus svg,\n    h5 ." + className + ":focus svg,\n    h6 ." + className + ":focus svg {\n      visibility: visible;\n    }\n  "; // This script used to have `let scrollTop` and `let clientTop` instead of
  // current ones which are `var`. It is changed due to incompatibility with
  // older browsers (that do not implement `let`). See:
  //  - https://github.com/gatsbyjs/gatsby/issues/21058
  //  - https://github.com/gatsbyjs/gatsby/pull/21083

  var style = icon ? /*#__PURE__*/_react.default.createElement("style", {
    key: "gatsby-remark-autolink-headers-style",
    type: "text/css"
  }, styles) : undefined;
  return setHeadComponents([style]);
};
