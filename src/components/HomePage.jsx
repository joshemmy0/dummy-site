import "../styles/main.css";
import { useState } from "react";
import OTPPage from "./OTP";
import LoggedIn from "./LoggedIn";

function HomePage() {
  const [userSignedUP, setUserSignedUP] = useState(false);
  const [formLogin, setFormLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function processSignUpData(data) {
    console.log(data);

    setUserSignedUP(true);
  }

  function processLoginData(data) {
    console.log(data);

    setUserLoggedIn(true);
  }

  function handleSignUp(e) {
    // e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    // const URL = "https://dummy-backend-gyc3.onrender.com/public/signup.php";
    // const fetchOptions = {
    //   method: "POST",
    //   body: formData,
    // };

    // fetch(URL, fetchOptions)
    //   .then((response) => response.json())
    //   .then((data) => processSignUpData(data))
    //   .catch((error) => console.error(error));
    setUserSignedUP(true);
  }

  function handleLogin(e) {
    // e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    // const URL = "https://dummy-backend-gyc3.onrender.com/public/login.php";
    // const fetchOptions = {
    //   method: "POST",
    //   body: formData,
    // };

    // fetch(URL, fetchOptions)
    //   .then((response) => response.json())
    //   .then((data) => processLoginData(data))
    //   .catch((error) => console.error(error));

    setUserLoggedIn(true);
  }

  if (userSignedUP) {
    return <OTPPage />;
  }

  if (userLoggedIn) {
    return <LoggedIn />;
  }

  return (
    <main className="flex justify-center items-center min-h-dvh">
      <section className="relative max-w-[470px] w-full rounded-[12px] p-[20px_30px_120px] bg-[#4070f4] shadow-[0_5px_10px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Signup Form */}
        <div className="form signup">
          <header
            onClick={() => {
              setFormLogin(false);
            }}
            className={`${
              formLogin && "opacity-60"
            } text-[30px] text-white font-semibold text-center cursor-pointer`}
          >
            Signup
          </header>
          <form className="flex flex-col gap-5 mt-10" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              required
              className="h-[60px] p-4 text-[16px] font-normal text-[#333] bg-white rounded-lg outline-none border-none"
            />
            <input
              type="text"
              placeholder="Email address"
              name="email"
              required
              className="h-[60px] p-4 text-[16px] font-normal text-[#333] bg-white rounded-lg outline-none border-none"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="h-[60px] p-4 text-[16px] font-normal text-[#333] bg-white rounded-lg outline-none border-none"
            />
            <button
              type="submit"
              className="h-[60px] p-4 mt-4 text-[18px]
              font-medium cursor-pointer bg-white text-[#333] rounded-lg
              hover:text-[#4070f4] border-none"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Login Form */}
        <div
          className={`absolute ${
            formLogin
              ? "bottom-[-15%] rounded-[35%] shadow-[0_-5px_10px_rgba(0,0,0,0.1)]"
              : "bottom-[-86%] rounded-full"
          } -translate-x-1/2 left-1/2 w-[calc(100%+220px)] h-full p-[20px_140px] bg-white transition-all duration-[600ms] ease-in-out
`}
        >
          <header
            onClick={() => {
              setFormLogin(true);
            }}
            className={`text-[30px] text-gray-600 font-semibold text-center cursor-pointer ${
              formLogin ? "opacity-100" : "opacity-60"
            }`}
          >
            Login
          </header>
          <form className="flex flex-col gap-5 mt-10" onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              required
              className="h-[60px] p-4 text-[16px] font-normal text-[#333] bg-white rounded-lg border border-gray-400 outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="h-[60px] p-4 text-[16px] font-normal text-[#333] rounded-lg border border-gray-400 outline-none focus:shadow-md"
            />
            {/* <a href="#" className="text-gray-600 hover:underline">
              Forgot password?
            </a> */}
            <button
              type="submit"
              className="h-[60px] p-4  rounded-lg
              hover:bg-[#4070f4]/70 mt-4 text-[18px] font-medium cursor-pointer bg-[#4070f4] text-white border-none"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
