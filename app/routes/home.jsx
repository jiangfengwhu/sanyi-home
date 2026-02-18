import { useI18n } from "../i18n/context";
import { Link } from "react-router";

// SEO meta for home page
export function meta() {
  return [
    { title: "Jiang Feng - Frontend Developer | 前端开发者" },
    {
      name: "description",
      content:
        "前端开发者 Jiang Feng 的个人主页，曾就职于小米、快手，专注于创建优雅且高效的用户界面。Portfolio of Jiang Feng, a frontend developer formerly at Xiaomi and Kuaishou.",
    },
    {
      name: "keywords",
      content:
        "Jiang Feng,前端开发,Frontend Developer,React,React Native,Swift,Golang,TypeScript,Node.js",
    },
    { property: "og:title", content: "Jiang Feng - Frontend Developer" },
    {
      property: "og:description",
      content:
        "Passionate frontend developer formerly at Xiaomi & Kuaishou. Building elegant and efficient user interfaces.",
    },
  ];
}

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-200",
  },
  {
    name: "React Native",
    icon: "📱",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-200",
  },
  {
    name: "Swift",
    icon: "🍎",
    color: "from-orange-500/10 to-red-500/10 border-orange-200",
  },
  {
    name: "Golang/Gin",
    icon: "🔧",
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-200",
  },
  {
    name: "TypeScript",
    icon: "📘",
    color: "from-blue-600/10 to-blue-400/10 border-blue-200",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-green-500/10 to-emerald-500/10 border-green-200",
  },
];

// Icons as components
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
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

function ArrowDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
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
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// Navigation bar
function Navbar() {
  const { t, toggleLang, lang } = useI18n();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900"
          >
            <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              Y
            </span>
            <span>Jiang Feng</span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#apps"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("nav.apps")}
            </a>
            <a
              href="#contact"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("nav.contact")}
            </a>
            <Link
              to="/support"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("nav.support")}
            </Link>
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-full hover:border-gray-400 transition-all"
              aria-label="Switch language"
            >
              {t("nav.langSwitch")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero section
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">{t("hero.subtitle")}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {t("hero.greeting")}
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("hero.name")}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-4 font-medium">
          {t("hero.role")}
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apps"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105"
          >
            {t("hero.viewApps")}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all"
          >
            {t("hero.contactMe")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ArrowDown />
      </div>
    </section>
  );
}

// About section
function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            {t("about.paragraph2")}
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {t("about.techStackTitle")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`group p-4 rounded-xl bg-gradient-to-br ${tech.color} border hover:scale-105 transition-all duration-300 cursor-default`}
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="text-sm font-medium text-gray-700">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// App card component
function AppCard({ app, index }) {
  const { t } = useI18n();
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
    >
      {/* App preview */}
      <div className="flex-1 w-full">
        <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative text-center py-8">
            <img
              src={app.icon}
              alt={app.name}
              className="w-20 h-20 mx-auto mb-4 rounded-2xl shadow-lg shadow-indigo-500/20 object-cover"
            />
            <h4 className="text-2xl font-bold text-gray-900">{app.name}</h4>
            <p className="text-gray-500 text-sm">{app.englishName}</p>
          </div>
        </div>
      </div>

      {/* App info */}
      <div className="flex-1 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {app.name}
          <span className="text-gray-400 text-lg ml-2 font-normal">
            {app.englishName}
          </span>
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {app.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {app.appStoreLink && (
            <a
              href={app.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105"
            >
              <AppleIcon />
              {t("apps.downloadAppStore")}
            </a>
          )}
          <Link
            to={app.privacyLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ShieldIcon />
            {app.privacy}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Apps section
function Apps() {
  const { t } = useI18n();

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
    <section id="apps" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("apps.title")}
          </h2>
          <p className="text-lg text-gray-500">{t("apps.subtitle")}</p>
        </div>

        <div className="space-y-24">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact section
function Contact() {
  const { t } = useI18n();

  const contactLinks = [
    {
      icon: <GithubIcon />,
      label: t("contact.github"),
      href: "https://github.com/jiangfengwhu",
      text: "github.com/jiangfengwhu",
      hoverColor: "hover:border-gray-900 hover:text-gray-900",
    },
    {
      icon: <TwitterIcon />,
      label: t("contact.twitter"),
      href: "https://twitter.com/jiangfengwhu202",
      text: "@jiangfengwhu202",
      hoverColor: "hover:border-gray-800 hover:text-gray-800",
    },
    {
      icon: <EmailIcon />,
      label: t("contact.email"),
      href: "mailto:yangy0324@hotmail.com",
      text: "yangy0324@hotmail.com",
      hoverColor: "hover:border-indigo-500 hover:text-indigo-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-500">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 text-gray-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.hoverColor}`}
            >
              <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                {link.icon}
              </div>
              <span className="font-medium text-gray-900">{link.label}</span>
              <span className="text-sm text-gray-500">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm mb-1">
          {t("footer.copyright").replace("{year}", year)}
        </p>
        <p className="text-xs text-gray-500">{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Apps />
      <Contact />
      <Footer />
    </div>
  );
}
