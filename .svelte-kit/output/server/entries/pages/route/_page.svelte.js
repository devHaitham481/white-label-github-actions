import { c as create_ssr_component, a as subscribe, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
import { c as components } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $components, $$unsubscribe_components;
  $$unsubscribe_components = subscribe(components, (value) => $components = value);
  $$unsubscribe_components();
  return `${$components.Test ? `${validate_component($components.Test || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
