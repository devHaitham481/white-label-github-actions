import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.c996c611.js","_app/immutable/chunks/index.e6505d68.js","_app/immutable/chunks/stores.0650d27a.js","_app/immutable/chunks/singletons.e218a88e.js","_app/immutable/chunks/index.a76d1baa.js","_app/immutable/chunks/store.ef93056d.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/0.7ea842f6.css"];
export const fonts = [];
