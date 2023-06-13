import Newsletter from "./Newsletter";
import { Twitter, Instagram, Facebook } from "./SocialIcons";

function Footer() {
  return (
    <footer className="bg-main border-t-2 p-8 space-y-5 md:grid md:grid-cols-2">
      {/* Newsletter form */}
      <Newsletter />

      {/* Socials and Copyright */}
      <div className="gap-2 text-center flex flex-col justify-center">
        <div className="flex items-center justify-center space-x-3 text-white">

          <a
            href="https://twitter.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform"
            rel="noreferrer"
          >
            <Twitter />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} MovieSearch. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
