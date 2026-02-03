import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop by our store or give us a call. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md border border-border h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3684813890834!2d-87.55219372426108!3d41.71830667596612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e25b3d0c0c1a9%3A0x5c0c8c6c8c8c8c8c!2s9275%20S%20South%20Chicago%20Ave%2C%20Chicago%2C%20IL%2060617!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="South Chicago Plumbing and Heating Supply Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Sample Plumbing and Heating Supply
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    9275 S South Chicago Ave<br />
                    Chicago, IL 60617
                  </p>
                  <a
                    href="https://maps.google.com/?q=9275+S+South+Chicago+Ave,+Chicago,+IL+60617"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a
                    href="tel:+17733758600"
                    className="text-primary hover:underline text-lg font-bold"
                  >
                    (773) 375-8600
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Click to call
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Business Hours</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="cta" size="lg" asChild className="w-full sm:w-auto">
                <a href="tel:+17733758600">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
