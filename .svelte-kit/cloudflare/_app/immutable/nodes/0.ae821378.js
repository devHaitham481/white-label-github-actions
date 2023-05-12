import{S,i as T,s as V,k as g,q as O,a as w,l as E,m as $,r as x,h as u,c as C,n as y,b,C as _,D as R,E as k,y as z,e as I,z as B,A as H,F as q,G as F,H as J,u as G,g as P,d as j,B as M,I as U}from"../chunks/index.e6505d68.js";import{p as Y}from"../chunks/stores.2edcdfa7.js";import{c as K}from"../chunks/store.ef93056d.js";import{_ as A}from"../chunks/preload-helper.41c905a7.js";function Q(n){let e,a,r,l,s,m;return{c(){e=g("nav"),a=g("a"),r=O("Home"),l=w(),s=g("a"),m=O("Route"),this.h()},l(c){e=E(c,"NAV",{class:!0});var f=$(e);a=E(f,"A",{class:!0,href:!0});var h=$(a);r=x(h,"Home"),h.forEach(u),l=C(f),s=E(f,"A",{class:!0,href:!0});var d=$(s);m=x(d,"Route"),d.forEach(u),f.forEach(u),this.h()},h(){y(a,"class","font-semibold text-primary-800 hover:underline"),y(a,"href","/"),y(s,"class","font-semibold text-primary-800 hover:underline"),y(s,"href","/route"),y(e,"class","flex flex gap-2 py-3 px-4 shadow bg-white")},m(c,f){b(c,e,f),_(e,a),_(a,r),_(e,l),_(e,s),_(s,m)},p:R,i:R,o:R,d(c){c&&u(e)}}}class W extends S{constructor(e){super(),T(this,e,null,Q,V,{})}}const X=n=>n?n.charAt(0).toUpperCase()+n.slice(1):"",Z=n=>{var a;if(!n)return"";let e=(a=n.split("/").pop())==null?void 0:a.split(".")[0];return e?X(e):n},ee=n=>{switch(n){case"cloudflare":return Object.assign({"/src/lib/custom/cloudflare/test.svelte":()=>A(()=>import("../chunks/test.6fe67eb6.js"),["../chunks/test.6fe67eb6.js","../chunks/index.e6505d68.js"],import.meta.url).then(e=>e.default)});case"repguide":return Object.assign({"/src/lib/custom/repguide/superdupersecret.svelte":()=>A(()=>import("../chunks/superdupersecret.012e4833.js"),["../chunks/superdupersecret.012e4833.js","../chunks/index.e6505d68.js"],import.meta.url).then(e=>e.default)});case"development":return{...Object.assign({"/src/lib/custom/repguide/superdupersecret.svelte":()=>A(()=>import("../chunks/superdupersecret.012e4833.js"),["../chunks/superdupersecret.012e4833.js","../chunks/index.e6505d68.js"],import.meta.url).then(e=>e.default)}),...Object.assign({"/src/lib/custom/cloudflare/test.svelte":()=>A(()=>import("../chunks/test.6fe67eb6.js"),["../chunks/test.6fe67eb6.js","../chunks/index.e6505d68.js"],import.meta.url).then(e=>e.default)})};default:return{}}},te=async n=>{let e=ee(n);for(const a in e)e[a]=await e[a]().then(r=>r);return Object.keys(e).reduce((a,r)=>r?{...a,[Z(r)]:e[r]}:a,{})};function D(n){let e,a;return{c(){e=g("style"),a=O(`:root {
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
}`),this.h()},l(r){e=E(r,"STYLE",{lang:!0});var l=$(e);a=x(l,`:root {
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
}`),l.forEach(u),this.h()},h(){y(e,"lang","postcss")},m(r,l){b(r,e,l),_(e,a)},d(r){r&&u(e)}}}function re(n){let e,a,r,l,s,m,c=JSON.stringify(n[0],null,2)+"",f,h,d,v;e=new W({});const L=n[2].default,p=k(L,n,n[1],null);let i=n[0].data.environment.name==="repguide"&&D();return{c(){z(e.$$.fragment),a=w(),r=g("main"),p&&p.c(),l=w(),s=g("pre"),m=O("$page: "),f=O(c),h=w(),i&&i.c(),d=I(),this.h()},l(t){B(e.$$.fragment,t),a=C(t),r=E(t,"MAIN",{class:!0});var o=$(r);p&&p.l(o),l=C(o),s=E(o,"PRE",{class:!0});var N=$(s);m=x(N,"$page: "),f=x(N,c),N.forEach(u),o.forEach(u),h=C(t),i&&i.l(t),d=I(),this.h()},h(){y(s,"class","bg-gray-700 text-gray-100 p-2 text-xs"),y(r,"class","flex flex-col gap-4 p-4")},m(t,o){H(e,t,o),b(t,a,o),b(t,r,o),p&&p.m(r,null),_(r,l),_(r,s),_(s,m),_(s,f),b(t,h,o),i&&i.m(t,o),b(t,d,o),v=!0},p(t,[o]){p&&p.p&&(!v||o&2)&&q(p,L,t,t[1],v?J(L,t[1],o,null):F(t[1]),null),(!v||o&1)&&c!==(c=JSON.stringify(t[0],null,2)+"")&&G(f,c),t[0].data.environment.name==="repguide"?i||(i=D(),i.c(),i.m(d.parentNode,d)):i&&(i.d(1),i=null)},i(t){v||(P(e.$$.fragment,t),P(p,t),v=!0)},o(t){j(e.$$.fragment,t),j(p,t),v=!1},d(t){M(e,t),t&&u(a),t&&u(r),p&&p.d(t),t&&u(h),i&&i.d(t),t&&u(d)}}}function ae(n,e,a){let r;U(n,Y,m=>a(0,r=m));let{$$slots:l={},$$scope:s}=e;return te(r.data.environment.name).then(m=>{K.set(m)}),n.$$set=m=>{"$$scope"in m&&a(1,s=m.$$scope)},[r,s,l]}class le extends S{constructor(e){super(),T(this,e,ae,re,V,{})}}export{le as component};
