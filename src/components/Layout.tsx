import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <span className="font-body">Dr. Vithalrao Vikhe Patil College Of Engineering, Ahilyanagar</span>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1"><Mail size={14} /> csd@gmail.com</span>
            <span className="flex items-center gap-1"><Phone size={14} /> +91 98901 24580</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-card shadow-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
              CS
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-foreground text-lg leading-tight">Computer Science & Design</div>
              <div className="text-xs text-muted-foreground font-body">Department of CSD</div>
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
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
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
          <nav className="md:hidden bg-card border-t border-border pb-4">
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
              <Mail size={16} /> csd@gmail.com
            </div>
            <div className="flex items-center gap-2 mb-6 text-sm font-body opacity-80">
              <Phone size={16} /> +91 98901 24580
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20">
          <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-xs font-body opacity-70">
            <span>© 2025 CSD Department, Dr. Vithalrao Vikhe Patil College Of Engineering, Ahilyanagar. All rights reserved.</span>
            <span>Designed & Developed by CSD Team</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
