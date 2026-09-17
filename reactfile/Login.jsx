import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginStudent, loginAdmin } from "../modules/auth";
import { setCurrentUser, setUserType } from "../modules/state";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  function handleStudentLogin(event) {
    event.preventDefault();

    const studentId = document
      .getElementById("studentId")
      .value
      .trim();

    const studentPassword =
      document.getElementById("studentPassword").value;

    const user = loginStudent(
      studentId,
      studentPassword
    );

    if (user) {
      setCurrentUser(user);
      setUserType("student");
      navigate("/course");
    } else {
      alert("Invalid Student ID or Password");
    }
  }

  function handleAdminLogin(event) {
    event.preventDefault();

    const adminId = document
      .getElementById("adminId")
      .value
      .trim();

    const adminPassword =
      document.getElementById("adminPassword").value;

    const user = loginAdmin(
      adminId,
      adminPassword
    );

    if (user) {
      setCurrentUser(user);
      setUserType("admin");
      navigate("/dashboard");
    } else {
      alert("Invalid Admin ID or Password");
    }
  }

  return (
    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <div className="logo">
          LearnSpace
        </div>

        <h2>Choose Your Role</h2>

        <button
          type="button"
          className="role-btn"
          onClick={() => setRole("student")}
        >
          Student
        </button>

        <button
          type="button"
          className="role-btn"
          onClick={() => setRole("admin")}
        >
          Admin
        </button>

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        {/* WELCOME */}

        {role === "" && (
          <div className="welcome-content">

            <h1>Welcome to LearnSpace</h1>

            <p>
              Please select Student or Admin
              from the left side to continue.
            </p>

          </div>
        )}

        {/* STUDENT LOGIN */}

        {role === "student" && (
          <div className="login-form-container">

            <h1>Student Login</h1>

            <form
              id="studentLoginForm"
              onSubmit={handleStudentLogin}
              autoComplete="off"
            >

              <label htmlFor="studentId">
                Student ID
              </label>

              <input
                type="text"
                id="studentId"
                name="studentId"
                placeholder="Enter Student ID"
                autoComplete="off"
                required
              />

              <label htmlFor="studentPassword">
                Password
              </label>

              <input
                type="password"
                id="studentPassword"
                name="studentPassword"
                placeholder="Enter Password"
                autoComplete="new-password"
                required
              />

              <button
                type="submit"
                className="login-submit"
              >
                Login
              </button>

            </form>

            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

            <p>
              Don't have an account?{" "}
              <Link to="/register">
                Register
              </Link>
            </p>

          </div>
        )}

        {/* ADMIN LOGIN */}

        {role === "admin" && (
          <div className="login-form-container">

            <h1>Admin Login</h1>

            <form
              id="adminLoginForm"
              onSubmit={handleAdminLogin}
              autoComplete="off"
            >

              <label htmlFor="adminId">
                Admin ID
              </label>

              <input
                type="text"
                id="adminId"
                name="adminId"
                placeholder="Enter Admin ID"
                autoComplete="off"
                required
              />

              <label htmlFor="adminPassword">
                Password
              </label>

              <input
                type="password"
                id="adminPassword"
                name="adminPassword"
                placeholder="Enter Password"
                autoComplete="new-password"
                required
              />

              <button
                type="submit"
                className="login-submit"
              >
                Login
              </button>

            </form>

            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

            <p>
              Don't have an account?{" "}
              <Link to="/admin-register">
                Register
              </Link>
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Login;