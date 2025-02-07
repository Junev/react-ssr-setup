import React from "react";
import { renderToString } from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";

import Html from "components/Template/html";
import { RenderType } from "types/server";

// 客户端渲染
let renderCSR: RenderType;

renderCSR = ({ res }) => {
  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const linkElements = webExtractor.getLinkElements();
  const styleElements = webExtractor.getStyleElements();
  const scriptElements = webExtractor.getScriptElements();
  res.send("<!doctype html>" + renderToString(<Html link={linkElements.concat(styleElements)} script={scriptElements} />));
};

export { renderCSR };
