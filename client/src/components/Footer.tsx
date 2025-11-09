import { Link } from "wouter";
import logo from "@assets/orizma-logo.png";

export default function Footer() {
  const productLinks = [
    { label: "4K TVs", href: "/products" },
    { label: "Smart TVs", href: "/products" },
    { label: "All Products", href: "/products" },
    { label: "Accessories", href: "/products" },
  ];

  const supportLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Warranty", href: "/warranty" },
    { label: "Setup Guide", href: "/setup" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/career" },
    { label: "News", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-gradient-to-b from-card/50 to-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <img 
                src={logo} 
                alt="ORIZMA" 
                className="h-8 mb-6 hover:opacity-80 transition-opacity"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm" data-testid="text-footer-description">
              Redefining home entertainment with cutting-edge technology and stunning design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-products-title">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-support-title">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-company-title">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © 2025 Orizma. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
