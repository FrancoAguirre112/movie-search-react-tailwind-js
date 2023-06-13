import { useState } from "react";
import heroImage from "../assets/heroImagePopcorn.png";
import { useAuthContext } from "../contexts/authContext";
import Modal from "../components/Modal";
import { useForm } from "react-hook-form";

function Login({ open = false }) {
  const { login } = useAuthContext();
  const [isLoginOpen, setIsLoginOpen] = useState(open);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    if (isValid && data.user === "admin" && data.password === "admin") {
      login();
      setIsLoginOpen(false);
    } else {
      alert("Incorrect user and/or password");
    }
  };

  return (
    <>
      <button
        className="block p-3 px-6 pt-2 font-bold text-white text-center border-2 rounded-full hover:bg-white hover:text-black transition-all"
        onClick={() => setIsLoginOpen(true)}
      >
        Login
      </button>
      <Modal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <div className="space-y-8">
          <img
            src={heroImage}
            alt="an image of popcorn"
            className="max-w-[60%] mx-auto"
          />

          <form
            className="flex flex-col space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Username"
              className="border-2 rounded-lg p-2 bg-gray-600 focus:outline-none focus:border-gray-700"
              {...register("user", { required: true })}
            />
            {errors.user && <p className="text-red-600">Username is required</p>}

            <input
              type="password"
              placeholder="Password"
              className="border-2 rounded-lg p-2 bg-gray-600 focus:outline-none focus:border-gray-700"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-600">Password is required</p>}

            <p>Use username: admin password: admin</p>

            <button
              type="submit"
              className="p-3 px-6 pt-2 font-bold text-white text-center border-2 rounded-full align-baseline hover:bg-white hover:text-black transition-all md:block"
            >
              Login
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Login;
