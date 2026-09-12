import { useEffect, useState } from "react";
import translations from "./data/translations";

import { PortfolioContext } from "./contexts/portfolioContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "ar" : "en"));
  };

  return (
    <PortfolioContext.Provider
      value={{
        data: t,
        lang: language,
        toggleLanguage: toggleLanguage,
      }}
    >
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main>
          <Hero t={t} />
          <About t={t} />
          <Skills t={t} />
          <Projects t={t} />
          <Experience t={t} />
          <Services t={t} />
          <Contact t={t} />
        </main>

        <Footer t={t} />
      </div>
    </PortfolioContext.Provider>
  );
}
