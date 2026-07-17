import { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader";
import PortfolioHero from "./sections/PortfolioHero";
import PortfolioAbout from "./sections/PortfolioAbout";
import PortfolioSkills from "./sections/PortfolioSkills";
import PortfolioProjects from "./sections/PortfolioProjects";
import PortfolioAchievements from "./sections/PortfolioAchievements";
import PortfolioContact from "./sections/PortfolioContact";
import PortfolioFooter from "./sections/PortfolioFooter";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); }, [theme]);
  return <><SiteHeader theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} /><main><PortfolioHero /><PortfolioAbout /><PortfolioSkills /><PortfolioProjects /><PortfolioAchievements /><PortfolioContact /></main><PortfolioFooter /></>;
}
