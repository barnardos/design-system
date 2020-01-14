import hljs from "highlight.js";
import pretty from "pretty";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import renderHTML from "react-render-html";

import "./index.css";
import "highlight.js/styles/vs.css";

const htmlCode = component => {
  let code = ReactDOMServer.renderToStaticMarkup(component);
  // removes src to increase readability
  code = code.replace(/src="[^"]*"?/g, 'src=""');

  return hljs.highlight("xml", pretty(code)).value;
};

const codeSection = (language, code, activeTab) => {
  if (code) {
    let lang, langCode;
    if (language == "html") {
      langCode = code;
      lang = "xml";
    } else {
      lang = language == "react" ? "javascript" : language;
      langCode = hljs.highlight(lang, code).value;
    }
    return (
      <>
        <div
          className={language != activeTab ? "CodeExample-code--hidden" : ""}
        >
          <pre classNames="html CodeExample">
            <code className={"hljs " + lang}>{renderHTML(langCode)}</code>
          </pre>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const codeButton = (language, label, activeTab, setTab) => {
  return (
    <button
      className={
        "CodeExample-button " + (activeTab == language ? "selected" : "")
      }
      onClick={() => setTab(language)}
    >
      {label}
    </button>
  );
};

const CodeExample = ({ component, ruby, react }) => {
  const [activeTab, setTab] = useState("html");
  const languages = { ruby: ruby, react: react };
  const sections = [codeSection("html", htmlCode(component), activeTab)];
  const buttons = [codeButton("html", "HTML", activeTab, setTab)];

  Object.entries(languages).forEach(([lang, code]) => {
    const section = codeSection(lang, code, activeTab);
    if (section) {
      sections.push(section);
      buttons.push(codeButton(lang, lang, activeTab, setTab));
    }
  });

  return (
    <>
      <div className="CodeExample-buttonGroup">{buttons}</div>
      {sections}
    </>
  );
};

CodeExample.propTypes = {
  react: PropTypes.node.isOptional,
  ruby: PropTypes.node.isOptional,
  component: PropTypes.node.isRequired
};

export default CodeExample;
