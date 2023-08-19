import React, { useState } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import firebase from "firebase/compat/app"; // Import from compat
import "firebase/compat/auth"; // Import from compat

const firebaseConfig = {
  apiKey: "AIzaSyA4zB1vV4P2QAuIYHgbc1NRxNzTPQFJEN0",
  authDomain: "login-page-53026.firebaseapp.com",
  projectId: "login-page-53026",
  storageBucket: "login-page-53026.appspot.com",
  messagingSenderId: "671231580530",
  appId: "1:671231580530:web:a6376caead4f9122be65eb",
  measurementId: "G-PZV1B5TB5J"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

const App = () => {
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (email, password) => {
    // ... (login logic)
  };

  const handleGoogleLogin = async () => {
    // ... (Google login logic)
  };

  const handleGithubLogin = async () => {
    // ... (GitHub login logic)
  };

  const handleSignUp = async (email, password) => {
    // ... (sign-up logic)
  };

  return (
    <div className="App">
      <LoginPage
        handleLogin={handleLogin}
        handleGoogleLogin={handleGoogleLogin}
        handleGithubLogin={handleGithubLogin}
        handleSignUp={handleSignUp}
      />
      {loginError && <p className="error-message">{loginError}</p>}
    </div>
  );
};

export default App;