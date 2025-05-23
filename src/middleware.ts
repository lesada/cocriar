import {
	type MiddlewareConfig,
	type NextRequest,
	NextResponse,
} from "next/server";

const REDIRECT_WHEN_NOT_ADMIN = "/";

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isAdminRoute = path.includes("/admin");

	if (isAdminRoute) {
		const isUserAdmin = false;

		if (!isUserAdmin) {
			return NextResponse.redirect(
				new URL(REDIRECT_WHEN_NOT_ADMIN, request.url),
			);
		}
	}

	return NextResponse.next();
}

export const config: MiddlewareConfig = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
