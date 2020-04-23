import hljs from "highlight.js";
import pretty from "pretty";
import PropTypes from "prop-types";
import React from "react";
import ReactDOMServer from "react-dom/server";
import renderHTML from "react-render-html";

import "./index.css";
import "highlight.js/styles/vs.css";

const CodeExample = ({ children }) => {
  let code = ReactDOMServer.renderToStaticMarkup(children);
  // removes src to increase readability
  code = code.replace(/src="[^"]*"?/g, 'src=""');
  code = hljs.highlight("xml", pretty(code)).value;
  return (
    <pre className="html CodeExample">
      <code className="hljs xml">{renderHTML(code)}</code>
    </pre>
  );
};

CodeExample.propTypes = {
  children: PropTypes.node.isRequired
};

export default CodeExample;
