import { c as create_ssr_component } from "./index2.js";
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-primary-700">This is a super special testi boi and only available on cloudflare. Try to
  search for it in the source code!
  <br>
  <code class="select-all">superdupertestiboi</code></h1>`;
});
export {
  Test as default
};
