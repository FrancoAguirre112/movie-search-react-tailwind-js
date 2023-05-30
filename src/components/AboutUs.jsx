import employees from '../assets/employees.jpg';
import TestimonialCard from './TestimonialCard';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';

const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="container grid md:grid-cols-2 gap-4 mx-auto px-6 my-10  space-y-0 md:space-x-6">
          <div className="space-y-10 order-2 md:order-1">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5-xl md:text-left">
              Streamlined Movie Search Made Easy
            </h1>
            <p className="text-md text-center text-gray-600 md:text-left">
              We are a passionate team of movie enthusiasts dedicated to
              simplifying your movie search experience. Our platform empowers
              you to effortlessly find movies by title, ensuring you never miss
              out on your favorite films. With our user-friendly interface and
              extensive database, discovering the perfect movie has never been
              easier
            </p>
          </div>
          <div className="order-1">
            <img
              src={employees}
              alt="an image of people working"
              className="rounded-full "
            />
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container mx-auto px-6 mt-10 md:space-x-6 my-10 ">
          <h1 className="text-4xl font-bold text-center md:text-5-xl ">
            Meet the Team
          </h1>
          <div className="grid gap-4 md:grid-cols-3">
            <TestimonialCard name="John Smith" img={testimonial1}>
              Strategic visionary overseeing overall operations and leading the
              team towards innovation and growth
            </TestimonialCard>
            <TestimonialCard name="Sarah Johnson" img={testimonial3}>
              Driven leader spearheading the development of cutting-edge
              features and ensuring a seamless user experience
            </TestimonialCard>
            <TestimonialCard name="David Lee" img={testimonial2}>
              Expert in managing and optimizing the movie database, ensuring
              efficient and reliable search functionality for users
            </TestimonialCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
