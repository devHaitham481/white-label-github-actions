import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { c as components } from "../../chunks/store.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex flex gap-2 py-3 px-4 shadow bg-white"><a class="font-semibold text-primary-800 hover:underline" href="/">Home</a>
  <a class="font-semibold text-primary-800 hover:underline" href="/route">Route</a></nav>`;
});
const capitalizeFirstLetter = (string) => {
  if (!string)
    return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const normalizeComponentName = (string) => {
  if (!string)
    return "";
  let name = string.split("/").pop()?.split(".")[0];
  if (!name)
    return string;
  return capitalizeFirstLetter(name);
};
const loadComponentsByEnv = (env) => {
  switch (env) {
    case "cloudflare":
      return /* @__PURE__ */ Object.assign({
        "/src/lib/custom/cloudflare/test.svelte": () => import("../../chunks/test.js").then((m) => m["default"])
      });
    case "repguide":
      return /* @__PURE__ */ Object.assign({
        "/src/lib/custom/repguide/superdupersecret.svelte": () => import("../../chunks/superdupersecret.js").then((m) => m["default"])
      });
    case "development":
      return {
        .../* @__PURE__ */ Object.assign({
          "/src/lib/custom/repguide/superdupersecret.svelte": () => import("../../chunks/superdupersecret.js").then((m) => m["default"])
        }),
        .../* @__PURE__ */ Object.assign({
          "/src/lib/custom/cloudflare/test.svelte": () => import("../../chunks/test.js").then((m) => m["default"])
        })
      };
    default:
      return {};
  }
};
const getCustomComponentsByEnv = async (env) => {
  let components2 = loadComponentsByEnv(env);
  for (const path in components2) {
    components2[path] = await components2[path]().then((module) => module);
  }
  return Object.keys(components2).reduce((acc, key) => {
    if (!key)
      return acc;
    return { ...acc, [normalizeComponentName(key)]: components2[key] };
  }, {});
};
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#f9fafb}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  getCustomComponentsByEnv($page.data.environment.name).then((customs) => {
    components.set(customs);
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="flex flex-col gap-4 p-4">${slots.default ? slots.default({}) : ``}
  <pre class="bg-gray-700 text-gray-100 p-2 text-xs">$page: ${escape(JSON.stringify($page, null, 2))}</pre></main>

${$page.data.environment.name === "repguide" ? `<style lang="postcss">:root {
  --primary-50: 255 251 250;
  --primary-100: 254 244 241;
  --primary-200: 250 201 183;
  --primary-300: 246 158 126;
  --primary-400: 242 115 69;
  --primary-500: 232 73 16;
  --primary-600: 186 59 13;
  --primary-700: 138 44 10;
  --primary-800: 95 30 7;
  --primary-900: 48 15 3;

  /* https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo */
  --primary-dynamic: 232 73 16;

  --primary-gradient-from: 220 38 38;
  --primary-gradient-to: 234 88 12;
}
  </style>` : ``}`;
});
export {
  Layout as default
};
