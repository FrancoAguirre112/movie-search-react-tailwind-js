import Logo from './Logo';
import Socials from './Socials';

function Footer() {
  return (
    <footer className="bg-orange-500 p-10 ">
      <div className="container text-white flex mx-auto space-x-8">
        <div className="space-y-2 w-1/2 flex flex-col justify-end">
          <Socials />
          <p className="text-center">© 2023 Copyright: MovieSearch</p>
        </div>
        <div className="flex justify-center w-1/2 bg-red-200">
          <form action="" className="md:space-x-1 space-y-2">
            <h3 className="text-center font-bold">
              Suscribe to our newsletter
            </h3>
            <input
              type="email"
              placeholder="Enter your email here."
              className="rounded-lg px-5 py-1 w-full md:w-3/4"
            />
            <button
              type="submit"
              className="bg-gray-700 px-2 py-1 font-bold rounded-lg w-full md:w-1/4"
            >
              Suscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
