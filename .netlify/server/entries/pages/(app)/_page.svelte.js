import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<section class="${"columns mt-6 pt-6"}"><div class="${"column is-half is-offset-one-quarter"}"><h1 class="${"title"}">Sign in</h1>
		${(form == null ? void 0 : form.error) ? `<div class="${"block notification is-danger"}">${escape(form.error)}</div>` : ``}
		<form method="${"post"}"><div class="${"field"}"><label for="${"email"}" class="${"label"}">Email</label>
				<p class="${"control"}"><input id="${"email"}" name="${"email"}"${add_attribute("value", ((_a = form == null ? void 0 : form.values) == null ? void 0 : _a.email) ?? "", 0)} class="${"input"}" type="${"email"}" placeholder="${"Email"}" required></p></div>
			<div class="${"field"}"><label for="${"password"}" class="${"label"}">Password</label>
				<p class="${"control"}"><input id="${"password"}" name="${"password"}" class="${"input"}" type="${"password"}" placeholder="${"Password"}" required></p></div>
			<div class="${"field"}"><p class="${"control"}"><button ${""} class="${"button is-fullwidth is-link"}">Sign in</button></p></div></form>

		<div class="${"mt-6"}"><p class="${"has-text-centered"}">Don&#39;t have an account? <a href="${"/signup"}">Sign up</a></p></div></div></section>`;
});
export {
  Page as default
};
