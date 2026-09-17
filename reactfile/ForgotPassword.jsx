import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getStudents,
  getAdmins,
  saveStudents,
  saveAdmins
} from "../modules/storage";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [accountType, setAccountType] = useState("");
  const [userId, setUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Account type validation
    if (accountType === "") {
      alert("Please select account type.");
      return;
    }

    // ID validation
    if (userId.trim() === "") {
      alert("Please enter your registered ID.");
      return;
    }

    // Password validation
    if (newPassword.length < 6) {
      alert("Password must contain minimum 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Student password reset
    if (accountType === "student") {
      const students = getStudents();

      const student = students.find(function (user) {
        return user.id === userId.trim();
      });

      if (student) {
        student.password = newPassword;

        saveStudents(students);

        alert(
          "Password reset successful!\n\n" +
          "You can login with your new password."
        );

        navigate("/login");
      } else {
        alert(
          "Student ID not found. Please register first."
        );
      }
    }

    // Admin password reset
    if (accountType === "admin") {
      const admins = getAdmins();

      const admin = admins.find(function (user) {
        return user.id === userId.trim();
      });

      if (admin) {
        admin.password = newPassword;

        saveAdmins(admins);

        alert(
          "Admin password reset successful!\n\n" +
          "You can login with your new password."
        );

        navigate("/login");
      } else {
        alert(
          "Admin ID not found. Please register first."
        );
      }
    }
  }

  return (
    <div className="card">

      <h2>
        <i className="fa-solid fa-key"></i>
        Forgot Password
      </h2>

      <form
        id="forgotForm"
        onSubmit={handleSubmit}
      >

        <div className="input-box">

          <label htmlFor="accountType">
            Account Type
          </label>

          <select
            id="accountType"
            value={accountType}
            onChange={(event) =>
              setAccountType(event.target.value)
            }
          >
            <option value="">
              Select Account Type
            </option>

            <option value="student">
              Student
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

        </div>

        <div className="input-box">

          <label htmlFor="userId">
            Registered ID
          </label>

          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(event) =>
              setUserId(event.target.value)
            }
            placeholder="Enter Student ID / Admin ID"
            required
          />

        </div>

        <div className="input-box">

          <label htmlFor="newPassword">
            New Password
          </label>

          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(event) =>
              setNewPassword(event.target.value)
            }
            placeholder="Enter new password"
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
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            placeholder="Confirm password"
            required
          />

        </div>

        <button
          type="submit"
          className="btn"
        >
          Reset Password
        </button>

        <p className="message"></p>

      </form>

      <div className="login-link">

        Remember your password?{" "}

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

export default ForgotPassword;