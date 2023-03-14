import { c as create_ssr_component, b as subscribe } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const _page__svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress.svelte-pqa1cf:indeterminate{animation-duration:3.8s}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  {
    {
      $page.url.searchParams.get("redirect");
    }
  }
  $$unsubscribe_page();
  return `<section class="${"hero is-fullheight"}">
	<div class="${"hero-head"}"><progress class="${"progress is-small is-info svelte-pqa1cf"}" max="${"100"}"></progress></div>

	
	<div class="${"hero-body"}"><div class="${"container has-text-centered"}"><em class="${"subtitle"}">&quot;Because as we know, there are known knowns; there are things we know we know. We also know
				there are known unknowns; that is to say we know there are some things we do not know. But
				there are also unknown unknowns\u2014the ones we don&#39;t know we don&#39;t know&quot;
			</em></div></div>
</section>`;
});
export {
  Page as default
};
