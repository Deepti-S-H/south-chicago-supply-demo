import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground py-12 px-4">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Sample Plumbing and Heating Supply
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Your trusted family-owned plumbing and heating supply store serving our community and nearby areas since 1985.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+17733758600"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                (773) 375-8600
              </a>
              <a
                href="https://maps.google.com/?q=9275+S+South+Chicago+Ave,+Chicago,+IL+60617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  9275 S South Chicago Ave<br />
                  Chicago, IL 60617
                </span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>Mon-Fri: 7:00 AM - 5:00 PM</p>
              <p>Saturday: 8:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>
              © {new Date().getFullYear()} Sample Plumbing and Heating Supply. All rights reserved.
            </p>
            <p>
              Serving our community & nearby areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
