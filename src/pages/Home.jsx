import SearchBtn from "../components/SearchBtn";
import ListItem from "../components/ListItem";
import TestimonialCard from "../components/TestimonialCard";
import heroImagePopcorn from "../assets/heroImagePopcorn.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section id="hero">
        <div className="container flex flex-col-reverse items-center justify-between px-6 mx-auto mt-10  space-y-0 md:space-x-6 md:flex-row">
          <div className="flex flex-col space-y-11 md:w-1/2">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5-xl md:text-left">
              Discover and Explore Your Favorite Movies
            </h1>
            <p className="text-md text-center text-gray-300 md:text-left">
              Welcome to our movie discovery platform! Find your favorite movies
              and explore new ones with ease. Our website allows you to search
              and access a wide range of films. Get ready to uncover a world of
              cinematic wonders at your fingertips. Start exploring now!
            </p>
            <SearchBtn hiddenInMobile={false} />
          </div>
          <div className="flex flex-col md:-1/2">
            <img
              src={heroImagePopcorn}
              alt="an image of popcorn"
              className="max-h-96"
            />
          </div>
        </div>
      </section>

      {/* Feautres section */}
      <section id="features">
        <div className="container flex flex-col-reverse items-top justify-between px-6 mx-auto mt-16 md:space-x-6 md:flex-row">
          <div className="flex flex-col space-y-6 mt-10 md:mt-0 md:w-1/2">
            <ListItem number="01" title="Absolutely nothing">
              No benefit, no advantage, just pure neutrality. Our website
              offers... well, nothing exceptional. Enjoy the blandness!
            </ListItem>
            <ListItem number="02" title="The FOMO-Free zone">
              No groundbreaking features, no mind-blowing innovations. Welcome
              to our unremarkable corner of the web. Embrace the mediocrity!
            </ListItem>
            <ListItem number="03" title="The ultimate average experience">
              Prepare for a journey of pure averageness. Our website offers
              nothing extraordinary, just an ordinary browsing experience.
              Embrace the ordinary!
            </ListItem>
          </div>
          <div className="flex flex-col space-y-11 md:w-1/2">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5-xl md:text-right">
              Why choose us?
            </h1>
            <p className="text-md text-center text-gray-300 md:text-right">
              Given the plethora of options available to search for movies and
              watch their trailers, why should you choose to utilize this
              website instead of the conventional Google or YouTube search?
              Allow me to present you with three compelling reasons.
            </p>
            <SearchBtn />
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials">
        <div className="container mx-auto px-6 flex flex-col justify-center items-center mt-16 mb-16">
          <h1 className="max-w-full text-4xl font-bold text-center md:text-5-xl">
            Hear what people have to say about this product that literally just
            came out
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <TestimonialCard img={testimonial1} name={"Totallyr Eal"}>
              "This website transformed my life! I found myself floating on a
              cloud of cinematic enlightenment. My chakras aligned as I embarked
              on a soulful journey through movie trailers. Pure transcendence!"
            </TestimonialCard>
            <TestimonialCard img={testimonial2} name={"Realhu Man"}>
              "Transformed Perspective: This website opened my eyes to the
              hidden beauty in movies. It sparked a newfound appreciation,
              allowing me to connect with stories on a soulful level. Life will
              never be the same again."
            </TestimonialCard>
            <TestimonialCard img={testimonial3} name={"Rea Alwoman"}>
              "This ethereal realm of curated dreams unveiled a tapestry of
              emotions. Each trailer an enchanted melody, guiding my soul
              through the labyrinth of human stories. A sanctuary where movies
              breathe life."
            </TestimonialCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
