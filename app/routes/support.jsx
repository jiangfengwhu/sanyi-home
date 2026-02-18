import { Link } from "react-router";
import { useI18n } from "../i18n/context";

export function meta() {
  return [
    { title: "App Support | 应用支持" },
    {
      name: "description",
      content:
        "Get help and support for our apps. Contact us for any questions or issues. 获取应用帮助和支持。",
    },
  ];
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AppCard({ name, englishName, icon, privacyLink, appStoreLink }) {
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
      <img
        src={icon}
        alt={name}
        className="w-12 h-12 rounded-xl object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900">
          {name}
          {englishName !== name && (
            <span className="text-sm text-gray-400 font-normal ml-2">{englishName}</span>
          )}
        </h3>
        <div className="flex items-center gap-4 mt-1 text-sm">
          <Link
            to={privacyLink}
            className="inline-flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <ShieldIcon />
            {t("support.privacyPolicy")}
          </Link>
          {appStoreLink && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <AppleIcon />
              {t("support.appStore")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Support() {
  const { t, toggleLang } = useI18n();
  const support = t("support");

  const apps = [
    {
      ...t("apps.neoledger"),
      icon: "/images/appicons/neoledger.jpg",
      privacyLink: "/neoledger/privacy",
      appStoreLink: "https://apps.apple.com/us/app/neoledger/id6743987528",
    },
    {
      ...t("apps.keepy"),
      icon: "/images/appicons/keepy.jpg",
      privacyLink: "/keepy/privacy",
      appStoreLink: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {support.backHome}
          </Link>
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-full hover:border-gray-400 transition-all"
            aria-label="Switch language"
          >
            {t("nav.langSwitch")}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {support.title}
          </h1>
          <p className="text-lg text-gray-500">{support.subtitle}</p>
        </div>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {support.contactTitle}
          </h2>
          <p className="text-gray-600 mb-6">{support.contactDesc}</p>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <EmailIcon />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {support.emailLabel}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {support.emailDesc}
                </p>
                <a
                  href="mailto:yangy0324@hotmail.com"
                  className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  yangy0324@hotmail.com
                </a>
                <p className="text-xs text-gray-400 mt-2">
                  {support.responseTime}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apps */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {support.appsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {apps.map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Jiang Feng. All rights reserved.</p>
      </footer>
    </div>
  );
}
