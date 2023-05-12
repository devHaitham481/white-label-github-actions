export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cloudflare/favicon.ico","repguide/favicon.ico","whitelabel/favicon.ico"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.703092dd.js","app":"_app/immutable/entry/app.091cb54f.js","imports":["_app/immutable/entry/start.703092dd.js","_app/immutable/chunks/index.e6505d68.js","_app/immutable/chunks/singletons.1115f767.js","_app/immutable/chunks/index.a76d1baa.js","_app/immutable/entry/app.091cb54f.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e6505d68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
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
