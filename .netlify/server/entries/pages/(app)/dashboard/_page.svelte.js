import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let testTable;
  let user;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ testTable, user } = data);
  return `<div class="${"block"}"><p>Protected content for ${escape(user.email)}</p>
	<p>server-side fetched data with RLS:</p>
	<pre>${escape(JSON.stringify(testTable, null, 2))}</pre></div>
<div class="${"block"}"><p>user:</p>
	<pre>${escape(JSON.stringify(user, null, 2))}</pre></div>`;
});
export {
  Page as default
};
