import { Link } from "react-router-dom";
import "./Course.css";

function Course() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <i className="fa-solid fa-graduation-cap"></i>
          LearnSpace
        </div>

        <div className="nav-links">
          <Link to="/course">Home</Link>
          <a href="#categories">Categories</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <h1>
            Learn. Grow.{" "}
            <span>Succeed.</span>
          </h1>

          <p>
            Explore a wide range of courses, build your
            skills and track your learning progress with
            LearnSpace.
          </p>

          <div className="hero-buttons">
            <a
              href="#courses"
              className="primary-btn"
            >
              Explore Courses
            </a>

            <a
              href="#about"
              className="secondary-btn"
            >
              Learn More
            </a>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section
        className="section"
        id="categories"
      >
        <div className="section-title">

          <h2>Course Categories</h2>

          <p>
            Choose a category and start learning
            something new.
          </p>

        </div>

        <div className="category-container">

          <div className="category-card">
            <i className="fa-solid fa-code"></i>
            <h3>Programming</h3>
            <p>
              Learn programming languages and
              develop your coding skills.
            </p>
          </div>

          <div className="category-card">
            <i className="fa-solid fa-brain"></i>
            <h3>Artificial Intelligence</h3>
            <p>
              Explore AI, machine learning and
              intelligent technologies.
            </p>
          </div>

          <div className="category-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Data Science</h3>
            <p>
              Learn data analysis, visualization
              and data-driven decision making.
            </p>
          </div>

          <div className="category-card">
            <i className="fa-solid fa-palette"></i>
            <h3>Design</h3>
            <p>
              Improve your creativity and learn
              modern design concepts.
            </p>
          </div>

        </div>
      </section>

      {/* Popular Courses */}
      <section
        className="section"
        id="courses"
      >
        <div className="section-title">

          <h2>Popular Courses</h2>

          <p>
            Learn practical skills through
            carefully designed courses.
          </p>

        </div>

        <div className="course-container">

          {/* Course 1 */}
          <div className="course-card">

            <div className="course-header">
              <h3>Python Programming</h3>

              <span className="level beginner">
                Beginner
              </span>
            </div>

            <p>
              Learn Python fundamentals, variables,
              functions, loops, data structures and
              basic problem solving.
            </p>

            <div className="course-details">
              <span>
                <i className="fa-regular fa-clock"></i>{" "}
                6 Weeks
              </span>

              <span>
                <i className="fa-solid fa-book"></i>{" "}
                12 Lessons
              </span>
            </div>

            <Link
              to="/register"
              className="enroll-btn"
            >
              Enroll Now
            </Link>

          </div>

          {/* Course 2 */}
          <div className="course-card">

            <div className="course-header">
              <h3>Web Development</h3>

              <span className="level intermediate">
                Intermediate
              </span>
            </div>

            <p>
              Build modern websites using HTML,
              CSS, JavaScript and responsive design
              techniques.
            </p>

            <div className="course-details">
              <span>
                <i className="fa-regular fa-clock"></i>{" "}
                8 Weeks
              </span>

              <span>
                <i className="fa-solid fa-book"></i>{" "}
                16 Lessons
              </span>
            </div>

            <Link
              to="/register"
              className="enroll-btn"
            >
              Enroll Now
            </Link>

          </div>

          {/* Course 3 */}
          <div className="course-card">

            <div className="course-header">
              <h3>Data Science</h3>

              <span className="level intermediate">
                Intermediate
              </span>
            </div>

            <p>
              Understand data analysis, Python,
              Pandas, visualization and practical
              data science concepts.
            </p>

            <div className="course-details">
              <span>
                <i className="fa-regular fa-clock"></i>{" "}
                8 Weeks
              </span>

              <span>
                <i className="fa-solid fa-book"></i>{" "}
                18 Lessons
              </span>
            </div>

            <Link
              to="/register"
              className="enroll-btn"
            >
              Enroll Now
            </Link>

          </div>

          {/* Course 4 */}
          <div className="course-card">

            <div className="course-header">
              <h3>Artificial Intelligence</h3>

              <span className="level advanced">
                Advanced
              </span>
            </div>

            <p>
              Explore artificial intelligence,
              machine learning, neural networks and
              real-world AI applications.
            </p>

            <div className="course-details">
              <span>
                <i className="fa-regular fa-clock"></i>{" "}
                10 Weeks
              </span>

              <span>
                <i className="fa-solid fa-book"></i>{" "}
                20 Lessons
              </span>
            </div>

            <Link
              to="/register"
              className="enroll-btn"
            >
              Enroll Now
            </Link>

          </div>

        </div>
      </section>

      {/* About */}
      <section
        className="section"
        id="about"
      >
        <div className="section-title">

          <h2>Why LearnSpace?</h2>

          <p>
            Everything you need for a better
            learning experience.
          </p>

        </div>

        <div className="about-container">

          <div className="about-card">
            <i className="fa-solid fa-book-open"></i>

            <h3>Quality Courses</h3>

            <p>
              Learn through structured and
              easy-to-understand courses.
            </p>
          </div>

          <div className="about-card">
            <i className="fa-solid fa-chart-simple"></i>

            <h3>Track Progress</h3>

            <p>
              Monitor your learning progress
              and course completion.
            </p>
          </div>

          <div className="about-card">
            <i className="fa-solid fa-user-graduate"></i>

            <h3>Student Friendly</h3>

            <p>
              A simple and user-friendly platform
              designed for students.
            </p>
          </div>

          <div className="about-card">
            <i className="fa-solid fa-laptop-code"></i>

            <h3>Practical Learning</h3>

            <p>
              Develop useful skills through
              practical learning experiences.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        className="section"
        id="contact"
      >
        <div className="section-title">

          <h2>Contact Us</h2>

          <p>
            Get in touch with the LearnSpace team.
          </p>

        </div>

        <div className="contact-container">

          <div className="contact-card">
            <i className="fa-solid fa-envelope"></i>

            <h3>Email</h3>

            <p>
              LearnSpace@scms.com
            </p>
          </div>

          <div className="contact-card">
            <i className="fa-solid fa-phone"></i>

            <h3>Phone</h3>

            <p>
              +91 0987654321
            </p>
          </div>

          <div className="contact-card">
            <i className="fa-solid fa-location-dot"></i>

            <h3>Location</h3>

            <p>
              India
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>

        <div className="footer-content">

          <div>
            <h2>LearnSpace</h2>

            <p>
              Student Course Management and
              Learning Progress Tracking System.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <p>
              Courses
            </p>

            <p>
              About
            </p>

            <p>
              Contact
            </p>
          </div>

          <div>
            <h3>Learning</h3>

            <p>
              Programming
            </p>

            <p>
              Artificial Intelligence
            </p>

            <p>
              Data Science
            </p>
          </div>

        </div>

        <div className="copyright">
          © 2026 Student Course Management System
        </div>

      </footer>

    </div>
  );
}

export default Course;