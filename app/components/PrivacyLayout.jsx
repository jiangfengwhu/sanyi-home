import { Link } from "react-router";
import { useI18n } from "../i18n/context";

export default function PrivacyLayout({ title, intro, sections }) {
  const { t, toggleLang } = useI18n();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {t("privacy.backHome")}
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Title */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-10 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
            <p className="text-indigo-100 text-sm mt-2">
              {t("privacy.lastUpdated")}: 2025-01-01
            </p>
          </div>

          {/* Body */}
          <div className="px-8 py-10">
            {/* Intro */}
            <div className="prose prose-gray max-w-none mb-10">
              {intro.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Jiang Feng. All rights reserved.</p>
      </footer>
    </div>
  );
}
