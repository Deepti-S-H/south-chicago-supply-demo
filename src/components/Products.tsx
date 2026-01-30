import { Droplets, Flame, Bath, AlertTriangle } from "lucide-react";

const products = [
  {
    icon: Droplets,
    title: "Plumbing Parts & Fittings",
    description: "Pipes, valves, fittings, connectors, and all the essentials for any plumbing job.",
  },
  {
    icon: Flame,
    title: "Heating & Furnace Components",
    description: "Boiler parts, radiators, thermostats, and heating system components.",
  },
  {
    icon: Bath,
    title: "Kitchen & Bathroom Supplies",
    description: "Faucets, fixtures, drains, and everything for kitchen and bath installations.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Replacement Parts",
    description: "Hard-to-find parts when you need them most. Same-day availability on most items.",
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stock a wide selection of quality plumbing and heating supplies for professionals and DIYers alike.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <product.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
