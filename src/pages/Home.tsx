import {
  AboutBanner,
  Hero,
  PromotionBanner,
  TopProducts,
  ContactForm,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <AboutBanner />
      <PromotionBanner />
      <ContactForm />
      <button className="h-[50px] w-[300px] bg-orange-200 text-black">
        Exemplu buton
      </button>
    </div>
  );
};

export default Home;
