import { Twitter, Instagram, Facebook } from "./SocialIcons";

function Footer() {
  return (
    <footer className="bg-main border-t-2 p-8 space-y-5 md:grid md:grid-cols-2">
      
      {/*Newsletter form */}

      <form className="flex flex-col justify-center items-center text-center gap-2">
        <h3 className="font-bold">Suscribe to our newsletter</h3>

        <div className="flex flex-col gap-2 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email here."
            className="bg-gray-700 rounded-lg px-5 py-1 md:rounded-r-none"
          />
          <button className="border-2 px-2 py-1 font-bold rounded-lg md:rounded-l-none hover:text-black hover:bg-white transition-all">
            Subscribe
          </button>
        </div>
      </form>

      {/* Socials and Copyright */}
      <div className="gap-2 text-center flex flex-col justify-center">
        <div className="flex items-center justify-center space-x-3 text-white">
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform" rel="noreferrer"
          >
            <Twitter />
          </a>

          {/* Instragram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform" rel="noreferrer"
          >
            <Instagram />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform" rel="noreferrer"
          >
            <Facebook />
          </a>
        </div>
        <p>© 2023 Copyright: MovieSearch</p>
      </div>
    </footer>
  );
}

export default Footer;
