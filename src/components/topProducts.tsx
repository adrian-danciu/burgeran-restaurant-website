import { foodDb } from "../utils/foodDb";
import { ProductCard } from ".";

const TopProducts = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-5 px-5 mt-20">
      <p className="font-subtitle text-primary text-xl">Client's choices</p>
      <h1 className="font-title text-background text-3xl text-center">
        Our Most Ordered Servings
      </h1>
      <div className="grid lg:grid-cols-5  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5 w-full">
        {foodDb.map((food) => {
          if (food.favorite) {
            return (
              <ProductCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                description={food.description}
                image={food.image}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default TopProducts;
