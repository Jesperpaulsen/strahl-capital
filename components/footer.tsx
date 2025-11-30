import Link from "next/link";

const footerLinks = [
  { title: "About", href: "/about" },
  { title: "Investments", href: "/investments" },
  { title: "Exits", href: "/exits" },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold tracking-tight">
                  Strahl Capital
                </span>
              </Link>
              <p className="mt-4 text-neutral-400 text-sm leading-relaxed max-w-xs">
                Investing in sustainable businesses that create positive impact for people and the planet.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Get in Touch
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Interested in learning more about our investment approach?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center mt-4 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Contact Us
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Strahl Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
