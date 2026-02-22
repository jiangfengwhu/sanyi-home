import {
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  Link,
  useRouteLoaderData,
} from "react-router";
import { I18nProvider, useI18n } from "./i18n/context";

import indexStylesHref from "./index.css?url";

export async function loader({ request, context }) {
  let lang = context.detectedLang;
  if (!lang) {
    const acceptLanguage = request.headers.get("Accept-Language");
    if (acceptLanguage && acceptLanguage.startsWith("en")) {
      lang = "en";
    }
  }
  return { lang: lang || "zh" };
}

function Document({ children }) {
  const { lang } = useI18n();

  return (
    <html lang={lang === "zh" ? "zh-CN" : "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="丰哥浪迹天涯" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="丰哥浪迹天涯" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href={indexStylesHref} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }) {
  const rootData = useRouteLoaderData("root");
  const defaultLang = rootData?.lang || "zh";

  return (
    <I18nProvider defaultLang={defaultLang}>
      <Document>{children}</Document>
    </I18nProvider>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{message}</h1>
        <p className="text-lg text-gray-600 mb-6">{details}</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          ← Back to Home
        </Link>
        {stack && (
          <pre className="mt-8 text-left text-sm bg-gray-100 p-4 rounded-lg overflow-auto max-w-2xl mx-auto">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}

export function HydrateFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}
