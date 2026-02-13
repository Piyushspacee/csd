import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import headerImage from "@/assets/header.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "https://registration.csdaura.in" },
  { label: "Gallery", path: "/gallery" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">

      {/* College Header Image */}
      <div className="w-full bg-white">
        <img
          src={headerImage}
          alt="College Header"
          className="w-full max-h-28 object-contain mx-auto"
        />
      </div>

      {/* Navigation */}
     <header className="sticky top-0 z-50 bg-blue-900 shadow-sm">

        <div className="container flex items-center justify-between h-16">

          {/* Department Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="CSD Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
             <div className="font-display font-bold text-white text-lg leading-tight">

                Association of Computer Science & Design Students
              </div>
              <div className="text-xs text-blue-100 font-body">

                Department of Computer Science & Design
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-body font-medium text-sm transition-colors relative ${
               pathname === link.path
  ? "text-yellow-300"
  : "text-white hover:text-yellow-300"

                }`}
              >
                {link.label}
                {pathname === link.path && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-white border-t pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 font-body text-sm ${
                  pathname === link.path
                    ? "text-primary font-semibold border-l-4 border-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {/* Announcement Bar */}
{/* Announcement Bar */}
<div className="bg-blue-900 text-white py-2 overflow-hidden">
  <div className="marquee">
    <div className="marquee-content">
      🎉 Registration for AURA 2.0 Started — Register Now! 🚀
    </div>
    <div className="marquee-content">
      🎉 Registration for AURA 2.0 Started — Register Now! 🚀
    </div>
  </div>
</div>


      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">CSD Department</h3>
            <p className="font-body text-sm opacity-80 leading-relaxed">
              Department of Computer Science & Design<br />
              Dr. Vithalrao Vikhe Patil College Of Engineering, Ahilyanagar<br />
              Empowering innovation through technology and design.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex items-center gap-2 mb-3 text-sm font-body opacity-80">
              <MapPin size={16} /> Dr. Vithalrao Vikhe Patil College Of Engineering, Ahilyanagar
            </div>
            <div className="flex items-center gap-2 mb-3 text-sm font-body opacity-80">
              <Mail size={16} /> csddeptngr@gmail.com
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

<div className="border-t border-primary-foreground/20">
  <div className="container py-4 flex flex-col items-center text-center text-xs font-body opacity-70 space-y-2">
    <span>
      © 2026 CSD Department, Dr. Vithalrao Vikhe Patil College Of Engineering, Ahilyanagar. All rights reserved.
    </span>
    <span>
      Powered by LEVTECH SOLUTIONS
    </span>
  </div>
</div>

      </footer>

    </div>
  );
}
