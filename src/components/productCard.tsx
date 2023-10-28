import { ProductCard } from "../types/interfaces";

const productCard = ({ id, name, price, description, image }: ProductCard) => {
  return (
    <div
      key={id}
      className="h-[320px] w-full bg-cards font-text rounded-lg p-10 
      lg:gap-1 gap-5 flex flex-col justify-center items-center
      hover:border-2 border-primary hover:shadow-xl transition-all
      cursor-pointer
      "
    >
      <img src={image} alt={name} className="h-40 h- m-auto" />
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="font-subtitle text-background text-2xl mt-1">{name}</h3>
        <p className="font-title text-sm text-text text-center">
          {description}
        </p>
        <p className="font-subtitle text-primary text-2xl">${price}</p>
      </div>
    </div>
  );
};

export default productCard;
