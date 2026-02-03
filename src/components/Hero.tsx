import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center py-8 md:py-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Serving Our Community Since 1985</span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Plumbing & Heating Supply Store in Chicago
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Family-owned • Quality parts • Trusted by local professionals
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero-primary"
                size="xl"
                asChild
              >
                <a href="tel:+17733758600">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="hero-secondary"
                size="xl"
                asChild
              >
                <a 
                  href="https://maps.google.com/?q=9275+S+South+Chicago+Ave,+Chicago,+IL+60617"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber" />
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber" />
                <span>Quality Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
