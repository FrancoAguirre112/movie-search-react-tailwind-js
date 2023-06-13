import { useForm } from "react-hook-form";
import { Twitter, Instagram, Facebook } from "./SocialIcons";
import { useState } from "react";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = () => {
    if (isValid) setSubscribed(true);
  };

  return (
    <footer className="bg-main border-t-2 p-8 space-y-5 md:grid md:grid-cols-2">
      {/*Newsletter form */}
      {subscribed ? (
        <p className="flex justify-center items-center">Thanks for suscribing to our newsletter!</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center text-center gap-2"
        >
          <h3 className="font-bold">Suscribe to our newsletter</h3>

          <div className="flex flex-col gap-2 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email here."
              className="bg-gray-700 rounded-lg px-5 py-1 md:rounded-r-none"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <button className="border-2 px-2 py-1 font-bold rounded-lg md:rounded-l-none hover:text-black hover:bg-white transition-all">
              Subscribe
            </button>
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </form>
      )}

      {/* Socials and Copyright */}
      <div className="gap-2 text-center flex flex-col justify-center">
        <div className="flex items-center justify-center space-x-3 text-white">
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform"
            rel="noreferrer"
          >
            <Twitter />
          </a>

          {/* Instragram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:scale-[130%] transition-transform"
            rel="noreferrer"
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
