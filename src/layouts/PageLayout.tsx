import { NavLink, NavLinkProps, Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { usePreloadImages } from "../hooks/usePreloadImages";
import { useTheme } from "../context/ThemeContext";

const CustomNavLink = ({ children, to, ...props }: NavLinkProps) => {
  const { preloadAboutImages } = usePreloadImages();

  const handleMouseEnter = () => {
    if (to === '/about') {
      preloadAboutImages();
    }
  };

  return (
    <NavLink
      {...props}
      to={to}
      onMouseEnter={handleMouseEnter}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg ${isActive
          ? "text-stone-700 dark:text-stone-200"
          : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Layout = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <header className="fixed top-0 w-full bg-white dark:bg-[#121212] shadow-sm dark:shadow-gray-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <nav className="flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold text-lg px-4 py-2 ${isActive
                    ? "text-stone-800 dark:text-stone-100"
                    : "text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100"
                  }`
                }
              >
                <img className="w-8 h-8" src={`/images/logo-${isDarkMode ? "light" : "dark"}.png`} alt="Logo" />
              </NavLink>
              <div className="hidden sm:flex space-x-2">
                <CustomNavLink to="/projects">Projects</CustomNavLink>
                <CustomNavLink to="/about">About</CustomNavLink>
              </div>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="sm:hidden">
                <CustomNavLink to="/projects">Projects</CustomNavLink>
                <CustomNavLink to="/about">About</CustomNavLink>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-12 pt-20 min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <footer className="w-full bg-white dark:bg-[#121212] border-t dark:border-gray-800">
        <div className="container mx-auto px-4 py-5 text-center text-gray-400">
          © {new Date().getFullYear()} Alessandro Capra
        </div>
      </footer>
    </div>
  );
};

export default Layout;
