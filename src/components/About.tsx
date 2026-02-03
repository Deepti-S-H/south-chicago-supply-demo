import { Users, Clock, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-warm-gray">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Sample Plumbing & Heating Supply
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For nearly four decades, our family has been providing local plumbers, 
            contractors, and homeowners with quality plumbing and heating supplies. 
            We're not just a supply store — we're your neighbors who understand the 
            importance of getting the right part the first time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Family Owned</h3>
            <p className="text-muted-foreground">
              Three generations of plumbing expertise serving our community with pride.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">40+ Years Experience</h3>
            <p className="text-muted-foreground">
              Decades of experience means we can help you find exactly what you need, even the hard-to-find parts.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Honest Advice</h3>
            <p className="text-muted-foreground">
              We'll give you straight answers and help you solve your plumbing problems, not just sell you parts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
