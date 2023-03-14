export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-de6714d5.js","imports":["_app/immutable/start-de6714d5.js","_app/immutable/chunks/index-cfb8112c.js","_app/immutable/chunks/singletons-bd088d47.js","_app/immutable/chunks/index-0ac99d86.js","_app/immutable/chunks/db-fc23ef6f.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "(app)",
				pattern: /^\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "(app)/dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "(app)/logging-in",
				pattern: /^\/logging-in\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "(app)/signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
