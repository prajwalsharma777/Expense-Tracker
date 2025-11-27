import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid sm:grid-cols-12 grid-cols-2 h-screen">
      <div className="bg-black sm:col-span-7">
        <span className="flex gap-3 m-4 mt-3 justify-between h-15">
          <img src="logo.png" alt="logo-MoneyTracker-Pro" className="w-19" />
          <img src="title.png" alt="Title-MoneyTracker-Pro" className="w-50" />
        </span>

        <h1 className="text-white text-5xl font-serif font-extrabold ml-10 mt-30">
          Welcome!
        </h1>
        <p className="text-white text-lg font-sans ml-11 mt-2">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Track. Analyze. Improve.",
              2000,
              "Monitor your spending and build healthier financial habits.",
              2000,
              "Track daily expenses and take charge of your budget.",
              2000,
              "Your monthly insights start here.",
              2000,
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
            className="inline-block"
          />
        </p>
        {/* <img src="login.png" alt="lady-computer" className="ml-10 w-120" /> */}
      </div>

      <div className="sm:col-span-5 flex justify-center items-center min-h-screen bg-cover bg-center bg-black/20">
        <form className="backdrop-blur-lg bg-black/10 border border-black/20 shadow-xl rounded-3xl p-8 w-[350px]">
          <h1 className="text-center font-semibold text-3xl text-black drop-shadow-md">
            Login
          </h1>

          {/* EMAIL */}
          <div className="flex items-center mt-6 w-full bg-black/20 border border-black/30 h-12 rounded-full overflow-hidden pl-6 gap-2 backdrop-blur-sm">
            <Mail className="text-black" />
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
              className="bg-transparent text-black placeholder-black/80 border-none outline-none ring-0 w-full"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center mt-3 w-full bg-black/20 border border-black/30 h-12 rounded-full overflow-hidden pl-6 gap-2 backdrop-blur-sm">
            <Lock className="text-black" />
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleChange}
              className="bg-transparent text-black placeholder-black/80 border-none outline-none ring-0 w-full"
              required
            />
          </div>

          {/* BUTTON */}
          <div className="mt-5 w-full">
            <button
              type="submit"
              className="w-full h-11 font-medium text-black rounded-full bg-red-600 hover:bg-red-700 cursor-pointer transition-all duration-300 backdrop-blur-sm"
            >
              Login
            </button>
          </div>

          {/* LINK */}
          <p className="text-center text-black mt-3">
            Don't have an account?
            <Link
              to="/dashboard"
              className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
              Click here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
