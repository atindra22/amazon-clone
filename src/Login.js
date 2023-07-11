import React , {useState} from "react";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const login = event => {
      event.preventDefault(); //it stops the page to refresh when clicked on login/signin
    //login logic

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        // logged in redirect to homepage
        navigate("/Home");
    })
    .catch(e => alert(e.message));

   };

   const register = event => {
    event.preventDefault(); //it stops the page to refresh when clicked on login/signin
  //register logic

    auth.createUserWithEmailAndPassword(email,password)
    .then(auth => {
        //create user and redirect to home page
    })
    .catch((e) => alert(e.message));
  
 }





  return (
    <div className="login">
      <Link to="/Home">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)}  type="password" />
          <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
        </form>

        <p>
          By signing in you agree to the terms and conditions of Amazon's
          privacy policy.
        </p>

        <button onClick={register} className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
