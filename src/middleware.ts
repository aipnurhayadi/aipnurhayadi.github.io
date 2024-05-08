import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["id", "en"],
  defaultLocale: "id",
});

export const config = {
  matcher: ["/", "/(id|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
