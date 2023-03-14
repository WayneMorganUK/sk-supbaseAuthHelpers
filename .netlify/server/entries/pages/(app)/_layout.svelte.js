import { c as create_ssr_component, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-gzgiot_START -->${$$result.title = `<title>Email and Password Demo - Supabase Auth Helpers</title>`, ""}<!-- HEAD_svelte-gzgiot_END -->`, ""}

<main class="${"container is-max-desktop"}"><div class="${"navbar-menu my-4"}"><div class="${"navbar-start"}"><a class="${"my-2"}" href="${"/"}">Supabase Auth Helpers Demo</a></div>
		<div class="${"navbar-end"}">${$page.data.session ? `<form action="${"/logout"}" method="${"post"}"><button ${""} type="${"submit"}">Sign out</button></form>` : ``}</div></div>

	${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
