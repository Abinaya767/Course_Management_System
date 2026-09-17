import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAdmins,
  saveAdmins
} from "../modules/storage";
import "./AdminRegister.css";

function AdminRegister() {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
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

    if (name === "") {
      alert("Please enter Admin Name.");
      return;
    }

    if (name.length < 3) {
      alert(
        "Admin Name must contain minimum 3 characters."
      );
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter valid email address.");
      return;
    }

    if (password === "") {
      alert("Please enter password.");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must contain minimum 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agree) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    const admins = getAdmins();

    const existingAdmin = admins.find(function (admin) {
      return admin.email === email;
    });

    if (existingAdmin) {
      alert("This email is already registered.");
      return;
    }

    const adminId =
      "ADM" +
      String(admins.length + 1).padStart(3, "0");

    const admin = {
      id: adminId,
      name: name,
      email: email,
      password: password
    };

    admins.push(admin);

    saveAdmins(admins);

    alert(
      "🎉 Admin Registration Successful!\n\n" +
      "Admin ID : " +
      adminId +
      "\n\nPlease save this ID.\n\n" +
      "Use this Admin ID and Password to login."
    );

    event.target.reset();
    setAgree(false);

    navigate("/login");
  }

  return (
    <div className="card">

      <h2>
        <i className="fa-solid fa-user-shield"></i>
        Admin Registration
      </h2>

      <form
        id="adminRegisterForm"
        onSubmit={handleSubmit}
      >

        <div className="input-box">
          <label htmlFor="name">
            Admin Name
          </label>

          <input
            type="text"
            id="name"
            placeholder="Enter Admin Name"
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
        >
          Register & Continue
        </button>

        <p className="message"></p>

      </form>

      <div className="login-link">

        Already have an account?{" "}

        <Link to="/login">
          Login Here
        </Link>

      </div>

      <Link
        to="/"
        className="back-btn"
      >
        <i className="fa-solid fa-house"></i>
        Back to Home
      </Link>

    </div>
  );
}

export default AdminRegister;