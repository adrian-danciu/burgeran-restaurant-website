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
      <button className="h-[50px] w-[200px] bg-black text-white">Exemplu buton</button>
    </div>
  );
};

export default Home;
