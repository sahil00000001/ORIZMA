import { Mail, MapPin, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-footer-brand">
              ORIZMA
            </h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Crafted to Endure
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-products-title">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products/32"><a className="hover:text-primary transition-colors" data-testid="link-footer-32">32" Series</a></Link></li>
              <li><Link href="/products/43"><a className="hover:text-primary transition-colors" data-testid="link-footer-43">43" Series</a></Link></li>
              <li><Link href="/products/55"><a className="hover:text-primary transition-colors" data-testid="link-footer-55">55" Series</a></Link></li>
              <li><Link href="/products/65"><a className="hover:text-primary transition-colors" data-testid="link-footer-65">65" Series</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-primary transition-colors" data-testid="link-footer-about">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:orizmaglobal@gmail.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">
                  orizmaglobal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="https://www.orizma.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-footer-website">
                  www.orizma.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span data-testid="text-footer-address">BK Block, Shalimar Bagh, Delhi - 110088</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">© 2025 ORIZMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
