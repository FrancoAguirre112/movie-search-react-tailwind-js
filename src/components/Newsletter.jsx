import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = () => { if (isValid) setSubscribed(true) };

  if (subscribed) {
    return (
      <p className="flex justify-center items-center">
        Thanks for subscribing to our newsletter!
      </p>
    );

  } else {
    return (
      // Newsletter form
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center text-center gap-2"
      >
        <h3 className="font-bold">Subscribe to our newsletter</h3>
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

        {/* Render error message */}
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </form>
    );
  }
}
