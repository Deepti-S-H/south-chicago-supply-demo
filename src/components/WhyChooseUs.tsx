import { Heart, Award, DollarSign, MapPinned } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Family Owned & Operated",
    description: "We treat every customer like family and stand behind everything we sell.",
  },
  {
    icon: Award,
    title: "Knowledgeable Staff",
    description: "Our team has decades of combined experience and can help with any project.",
  },
  {
    icon: DollarSign,
    title: "Fair Prices",
    description: "Quality parts at honest prices. No games, no gimmicks.",
  },
  {
    icon: MapPinned,
    title: "Chicago Community Trusted",
    description: "Serving local contractors and homeowners for over 40 years.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            When you shop with us, you're not just another customer — you're part of the family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-primary-foreground/80 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
