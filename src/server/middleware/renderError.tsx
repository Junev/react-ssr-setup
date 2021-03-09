import React from "react";
import { renderToString } from "react-dom/server";

import { RenderErrorType } from "@/server";
import Html from "components/Template/html";

let renderError: RenderErrorType;

renderError = ({ res, code, e }) =>
  res.send(
    "<!doctype html>" +
      renderToString(
        <Html css={[]} script={[]}>
          {`code: ${code}, error: ${e.toString()}`}
        </Html>
      )
  );

export { renderError };
