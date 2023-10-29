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
    </div>
  );
};

export default Home;
