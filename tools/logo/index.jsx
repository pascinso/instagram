import { svgMarkup, React, SvgXml } from "./utils";

export function useLogo() {
  return <SvgXml xml={svgMarkup} width="301px" />;
}
