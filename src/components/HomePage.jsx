import "../styles/main.css";

function HomePage() {
  function handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const URL = "https://dummy-backend-gyc3.onrender.com/public/signup.php";
    const fetchOptions = {
      method: "POST",
      body: formData,
    };

    fetch(URL, fetchOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const URL = "https://dummy-backend-gyc3.onrender.com/public/login.php";
    const fetchOptions = {
      method: "POST",
      body: formData,
    };

    fetch(URL, fetchOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignUp}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="username" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
