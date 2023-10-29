import promotionBanner from "../assets/img/promotion_banner.png";

const PromotionBanner = () => {
  return (
    <section className="flex lg:flex-row flex-col w-full justify-around items-center bg-background p-10 gap-5 lg:gap-0">
      <img
        src={promotionBanner}
        alt="chef"
        className="lg:w-[20%] md:w-[50%] sm:w-[50%] h-[30%]"
      />
      <div className="flex-col justify-center items-center flex w-full lg:w-[50%] gap-5">
        <p className="text-primary font-subtitle text-2xl">Do not miss...</p>
        <h1 className="font-title text-4xl text-headline lg:text-left text-center">
          Our spooky discount on the scariest burgers
        </h1>
        <p className="font-text text-text lg:text-left text-center">
          Free delivery and 20% off for all orders using the code:
          <span className="font-subtitle text-primary text-xl ml-4">
            SPOOKY20
          </span>
        </p>
      </div>
    </section>
  );
};

export default PromotionBanner;
