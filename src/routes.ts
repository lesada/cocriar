export enum ROUTES_PATHS {
	ARTICLES = "/artigos",
	ARTICLE = "/artigo/:id",
	EVENTS = "/eventos",
	EVENT = "/evento/:id",
	ABOUT = "/sobre",

	ADMIN_PANEL = "/admin/painel",
	ADMIN_ARTICLES = "/admin/artigos",
	ADMIN_ARTICLE = "/admin/artigo/:id",
	ADMIN_EVENTS = "/admin/eventos",
	ADMIN_EVENT = "/admin/evento/:id",
}

export const routes = [
	{
		destination: "/articles",
		source: ROUTES_PATHS.ARTICLES,
	},
	{
		destination: "/events",
		source: ROUTES_PATHS.EVENTS,
	},
	{
		destination: "/about",
		source: ROUTES_PATHS.ABOUT,
	},
	{
		destination: "/article/:id",
		source: ROUTES_PATHS.ARTICLE,
	},
	{
		destination: "/event/:id",
		source: ROUTES_PATHS.EVENT,
	},
	{
		destination: "/admin/panel",
		source: ROUTES_PATHS.ADMIN_PANEL,
	},
	{
		destination: "/admin/articles",
		source: ROUTES_PATHS.ADMIN_ARTICLES,
	},
	{
		destination: "/admin/events",
		source: ROUTES_PATHS.ADMIN_EVENTS,
	},
	{
		destination: "/admin/article/:id",
		source: ROUTES_PATHS.ADMIN_ARTICLE,
	},
	{
		destination: "/admin/event/:id",
		source: ROUTES_PATHS.ADMIN_EVENT,
	},
];
