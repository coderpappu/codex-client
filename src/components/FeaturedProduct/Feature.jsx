import FeatureCard from "./FeatureCard";
import featuredProduct from "./featuredProductDb";
export default function Feature({ category }) {
  const filterCategory = category.toLowerCase();
  return (
    <section className="flex flex-col gap-12">
      {featuredProduct
        .filter((f) => {
          if (filterCategory === "all") {
            return true;
          }
          if (f.category.toLowerCase() === filterCategory) {
            return true;
          }
        })
        .map((product, i) => {
          if (i % 2 === 0) {
            return (
              <FeatureCard
                key={product.id}
                product={product}
                orderImg="order-1"
                orderContent="order-2"
              />
            );
          } else {
            return (
              <FeatureCard
                orderContent="order-1"
                orderImg="order-2"
                key={product.id}
                product={product}
                position={true}
              />
            );
          }
        })}
    </section>
  );
}
