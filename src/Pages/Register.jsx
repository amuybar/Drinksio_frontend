import React, { useState } from "react";
import '../styles/Register.css';
import { registerUser } from "../Services/services_api";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError]=useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

// Function to handle user registration 
const handleSubmit  = async (event) => {
  event.preventDefault();
// check if password match
  if (password !== passwordConfirm) {
    setError("Passwords do not match");
  }

  try {
    const userData = { username, password, email };
    await registerUser(userData);
  } catch (error) {
    console.error("Error registering user:", error);
    setError("Error registering user");
  }
};

  return (
    <div id="signup-tab-content" class="tabcontent" style={{ display: "block" }}>
      <form class="signup-form" action="" method="post" onSubmit={handleSubmit} >
        <input type="email" class="input" id="user_email" autocomplete="off" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="text" class="input" id="user_name" autocomplete="off" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
         <input type="password" class="input" id="user_pass_confirm" autocomplete="off" placeholder="Confirm Password" value={passwordConfirm} onChange={handlePasswordConfirmChange} /> 
        <p>{error}</p>
        <input type="submit" class="button" value="Sign Up" />
      </form>
      <div class="help-text">
        <p>By signing up, you agree to our</p>
        <p>
          <a href="#">Terms of service</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;