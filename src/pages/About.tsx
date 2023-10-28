import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.jpg";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 mt-10">
      <h1 className="font-title text-background text-3xl">Our story</h1>
      <h1 className="font-subtitle text-primary text-5xl">
        Why ours are the best?
      </h1>
      <div className="w-[90%] flex lg:flex-row flex-col lg:justify-around justify-center items-center bg-background p-10 rounded-xl">
        <p className="font-text w-80 text-xl leading-8 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quam
          voluptas nulla odit impedit, aperiam soluta sit tempora quasi quo
          commodi molestias, doloremque officia. Optio non adipisci veritatis
          excepturi, placeat repellendus ducimus fugit provident minima harum,
          dolore, maxime iusto. Consectetur sit natus doloremque quod. Dolorem
          et totam dolore esse perferendis.
        </p>
        <img className="rounded-xl" src={about2} alt="about2" />
      </div>

      <div className="w-[90%] flex lg:flex-row flex-col lg:justify-around justify-center items-center bg-primary p-10 rounded-xl">
        <img className="rounded-xl" src={about3} alt="about2" />
        <p className="font-text w-80 text-xl leading-8 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quam
          voluptas nulla odit impedit, aperiam soluta sit tempora quasi quo
          commodi molestias, doloremque officia. Optio non adipisci veritatis
          excepturi, placeat repellendus ducimus fugit provident minima harum,
          dolore, maxime iusto. Consectetur sit natus doloremque quod. Dolorem
          et totam dolore esse perferendis.
        </p>
      </div>
    </section>
  );
};

export default About;
