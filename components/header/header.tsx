import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const menus = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Investments",
    href: "/investments",
  },
  {
    title: "Exits",
    href: "/exits",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight group-hover:text-primary-600 transition-colors">
              Strahl Capital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menus.map((menu) => {
              const isActive = router.asPath === menu.href ||
                (menu.href !== "/" && router.asPath.startsWith(menu.href));

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    }
                  `}
                >
                  {menu.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-100 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {menus.map((menu) => {
                const isActive = router.asPath === menu.href ||
                  (menu.href !== "/" && router.asPath.startsWith(menu.href));

                return (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                      ${isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                      }
                    `}
                  >
                    {menu.title}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
