import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mike R.",
    role: "Local Contractor",
    content: "These guys saved me in a pinch when I needed an obscure valve for an old boiler. Found it in 5 minutes. Lifesavers!",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Homeowner",
    content: "Honest and experienced. They didn't try to upsell me on expensive parts I didn't need. Rare to find that kind of service these days.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    role: "Plumber, 20+ Years",
    content: "I've been coming here for 15 years. They always have hard-to-find parts and the staff actually knows what they're talking about.",
    rating: 5,
  },
  {
    name: "Patricia K.",
    role: "Property Manager",
    content: "Best plumbing supply in South Chicago. Fair prices, friendly staff, and they're always willing to help troubleshoot.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-warm-gray">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber text-amber" />
            ))}
          </div>
          <p className="text-muted-foreground">
            5-star rated by our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-4 italic">
                "{review.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
