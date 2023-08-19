import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = ({
  handleLogin,
  handleGoogleLogin,
  handleGithubLogin,
  handleSignUp,
}) => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleGithubLogin}>Login with GitHub</button>
      <h2>Sign Up</h2>
      <SignUpForm handleSignUp={handleSignUp} />
    </div>
  );
};

const SignUpForm = ({ handleSignUp }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default LoginPage;
