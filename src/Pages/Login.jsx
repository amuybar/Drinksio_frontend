import React, { useState } from "react";
import '../styles/Login.css';
import { loginUser } from '../Services/services_api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
// Function to handle Login and remember user
const handleSubmit = async (event) => {
  event.preventDefault();

    
  if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
   }
  

  try {
   await loginUser(username, password);
   navigate('/home');
  } catch (error) {
    console.error("Login failed:", error);
    setError(error.message)
  }

};

  return (
    <div id="login-tab-content" class="tabcontent">
      <form class="login-form" action="" method="post" onSubmit={handleSubmit}>
        <input type="text" class="input" id="user_login" autocomplete="off" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        <input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <input 
          type="checkbox" 
          class="checkbox" 
          id="remember_me" 
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
        />
        <label for="remember_me">Remember me</label>
        <p>{error}</p>

        <input type="submit" class="button" value="Login" />
      </form>
      <div class="help-text">
        <p>
          <a href="#">Forget your password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;