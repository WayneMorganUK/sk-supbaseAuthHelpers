import { c as create_ssr_component } from "../../chunks/index.js";
import "../../chunks/db.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
