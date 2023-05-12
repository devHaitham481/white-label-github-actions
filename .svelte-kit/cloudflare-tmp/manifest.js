export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cloudflare/favicon.ico","repguide/favicon.ico","whitelabel/favicon.ico"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.4dd53edb.js","app":"_app/immutable/entry/app.0cf4c9ac.js","imports":["_app/immutable/entry/start.4dd53edb.js","_app/immutable/chunks/index.e6505d68.js","_app/immutable/chunks/singletons.e218a88e.js","_app/immutable/chunks/index.a76d1baa.js","_app/immutable/entry/app.0cf4c9ac.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e6505d68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/route",
				pattern: /^\/route\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
