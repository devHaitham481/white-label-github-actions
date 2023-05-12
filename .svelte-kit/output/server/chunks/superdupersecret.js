import { c as create_ssr_component } from "./index2.js";
const Superdupersecret = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-primary-700">This is super secret and only available in repguide. Try to search for it in
  the source code!
  <br>
  <code class="select-all">superdupersecret</code></h1>`;
});
export {
  Superdupersecret as default
};
