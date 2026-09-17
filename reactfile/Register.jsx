import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerStudent } from "../modules/auth";
import { setCurrentUser, setUserType } from "../modules/state";
import "./Register.css";

function Register() {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    const name = document
      .getElementById("name")
      .value
      .trim();

    const email = document
      .getElementById("email")
      .value
      .trim();

    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;

    // Name validation
    if (name === "") {
      alert("Please enter your full name.");
      return;
    }

    if (name.length < 3) {
      alert("Name must contain at least 3 characters.");
      return;
    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password === "") {
      alert("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (confirmPassword === "") {
      alert("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Terms validation
    if (!agree) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    // Register student
    const result = registerStudent(
      name,
      email,
      password
    );

    if (!result.success) {
      alert(result.message);
      return;
    }

    // Update application state
    setCurrentUser(result.student);
    setUserType("student");

    // Success message
    alert(
      "🎉 Registration Successful!\n\n" +
      "Student ID : " +
      result.student.id +
      "\n\nPlease save this ID.\n\n" +
      "Use this Student ID and Password to login."
    );

    // Reset form
    event.target.reset();
    setAgree(false);

    // Redirect to login
    navigate("/login");
  }

  return (
    <div className="card">

      <h2>
        <i className="fa-solid fa-user-plus"></i>
        Student Registration
      </h2>

      <form
        id="registerForm"
        onSubmit={handleRegister}
      >

        <div className="input-box">
          <label htmlFor="name">
            Full Name
          </label>

          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="email">
            Email Address
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">
            Password
          </label>

          <input
            type="password"
            id="password"
            placeholder="Create password"
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            required
          />
        </div>

        <div className="terms">

          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(event) =>
              setAgree(event.target.checked)
            }
          />

          <label htmlFor="agree">
            I agree to the Terms & Conditions
          </label>

        </div>

        <button
          type="submit"
          className="btn"
          id="registerBtn"
          disabled={!agree}
        >
          Register & Continue
        </button>

        <p
          id="message"
          className="message"
        ></p>

      </form>

      <div className="login-link">

        Already have an account?{" "}

        <Link to="/login">
          Login Here
        </Link>

      </div>

      <div className="back-home-container">

        <Link
          to="/"
          className="back-btn"
        >
          <i className="fa-solid fa-house"></i>
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;