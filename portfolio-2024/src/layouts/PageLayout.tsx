import { NavLink, NavLinkProps, Outlet } from "react-router";

const CustomNavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg transition-colors duration-200 ${
          isActive
            ? "text-green-700 font-semibold"
            : "text-gray-400 hover:text-gray-800"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-4">
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/about">About</CustomNavLink>
              <CustomNavLink to="/projects">Projects</CustomNavLink>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 pt-20 pb-16 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
      <footer className="w-full bg-white border-t">
        <div className="container mx-auto px-4 py-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Alessandro Capra
        </div>
      </footer>
    </div>
  );
};

export default Layout;
