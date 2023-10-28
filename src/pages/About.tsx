import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.jpg";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 mt-10">
      <h1 className="font-title text-background text-3xl">Our story</h1>
      <h1 className="font-subtitle text-primary text-5xl">
        Why ours are the best?
      </h1>
      <div className="w-[90%] max-w-[1200px] flex lg:flex-row flex-col lg:justify-around justify-center items-center bg-background p-10 rounded-xl lg:gap-0 gap-5 text-center">
        <p className="font-text w-80 text-xl leading-8 text-white">
          Welcome to Burgeran – where the sizzle of gourmet burgers meets the
          warmth of freshly toasted bread. Dive into a culinary journey that
          celebrates the finest ingredients and handcrafted flavors, making
          every bite an unforgettable experience.
        </p>
        <img className="rounded-xl" src={about2} alt="about2" />
      </div>

      <div className="w-[90%] max-w-[1200px] flex lg:flex-row flex-col lg:justify-around justify-center items-center bg-primary p-10 rounded-xl lg:gap-0 gap-5 text-center">
        <img className="rounded-xl" src={about3} alt="about2" />
        <p className="font-text w-80 text-xl leading-8 text-white">
          At Burgeran, we believe in the simple magic of a well-crafted burger
          and the comforting touch of a golden toast. Join us in savoring
          moments of delicious delight, one plate at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
