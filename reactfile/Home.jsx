import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <header className="hero">
        <nav className="nav">
          <div className="logo">
            <i className="fa-solid fa-graduation-cap"></i>
            LearnSpace
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>
            STUDENT COURSE MANAGEMENT
            <br />
            AND LEARNING PROGRESS TRACKING SYSTEM
          </h1>

          <p>Empowering Digital Learning & Academic Excellence</p>
        </div>
      </header>

      <section className="section">
        <h2>Login Access</h2>

        <div className="grid">
          <div className="card">
            <i className="fa-solid fa-users"></i>

            <h3>Login</h3>

            <p>
              Access courses, track progress and learning materials.
            </p>

            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Our Platform</h2>

        <p>
          The Student Course Management and Learning Progress Tracking
          System (SCMS) is a centralized digital learning platform
          designed to simplify academic management for both students
          and administrators.
        </p>

        <p>
          Students can register, enroll in courses, access learning
          materials, and track their learning progress in real time.
        </p>

        <p>
          Administrators can manage students, create courses, monitor
          enrollments, and generate academic reports efficiently.
        </p>

        <p>
          This platform provides an organized and user-friendly digital
          learning environment.
        </p>
      </section>

      <section className="section">
        <h2>Contact</h2>

        <p>
          Email :{" "}
          <a href="mailto:LearnSpace@scms.com">
            LearnSpace@scms.com
          </a>
        </p>

        <p>
          Phone :{" "}
          <a href="tel:+910987654321">
            +91 0987654321
          </a>
        </p>

        <p>Location : India</p>
      </section>

      <footer>
        © 2026 Student Course Management System
      </footer>
    </div>
  );
}

export default Home;