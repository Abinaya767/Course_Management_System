import { Link, useNavigate } from "react-router-dom";
import { logout } from "../modules/auth";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="container">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <i className="fa-solid fa-graduation-cap"></i>
          LearnSpace
        </div>

        <ul>
          <li className="active">
            <Link to="/dashboard">
              <i className="fa-solid fa-gauge"></i>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/course">
              <i className="fa-solid fa-book"></i>
              Courses
            </Link>
          </li>

          <li>
            <a href="#students">
              <i className="fa-solid fa-users"></i>
              Students
            </a>
          </li>

          <li>
            <a href="#reports">
              <i className="fa-solid fa-chart-line"></i>
              Reports
            </a>
          </li>

          <li>
            <Link to="/login">
              <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </Link>
          </li>
        </ul>

      </aside>

      {/* Main */}
      <main className="main">

        {/* Topbar */}
        <div className="topbar">

          <div className="page-title">
            <h2>Admin Dashboard</h2>
          </div>

          <div className="admin-profile">

            <i className="fa-solid fa-bell"></i>

            <div className="profile">

              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Admin"
              />

              <div>
                <h4>Admin</h4>
                <p>Administrator</p>
              </div>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="content">

          <h1>Dashboard Overview</h1>

          {/* Cards */}
          <div className="cards">

            <div className="card">

              <div className="icon-box">
                <i className="fa-solid fa-users"></i>
              </div>

              <h2>120</h2>
              <p>Total Students</p>

            </div>

            <div className="card">

              <div className="icon-box">
                <i className="fa-solid fa-book"></i>
              </div>

              <h2>15</h2>
              <p>Total Courses</p>

            </div>

            <div className="card">

              <div className="icon-box">
                <i className="fa-solid fa-user-check"></i>
              </div>

              <h2>98</h2>
              <p>Active Students</p>

            </div>

            <div className="card">

              <div className="icon-box">
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <h2>85%</h2>
              <p>Average Progress</p>

            </div>

          </div>

          {/* Table */}
          <div className="table-box">

            <h2>Recent Student Activity</h2>

            <table>

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>John</td>
                  <td>Python Programming</td>
                  <td>100%</td>
                  <td>
                    <span className="completed">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>Mary</td>
                  <td>Web Development</td>
                  <td>75%</td>
                  <td>
                    <span className="enrolled">
                      Enrolled
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>David</td>
                  <td>Data Science</td>
                  <td>60%</td>
                  <td>
                    <span className="enrolled">
                      Enrolled
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>Sarah</td>
                  <td>Artificial Intelligence</td>
                  <td>100%</td>
                  <td>
                    <span className="completed">
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Actions */}
          <div className="actions">

            <div className="action-card">

              <i className="fa-solid fa-book-open"></i>

              <h3>Manage Courses</h3>

              <p>
                View and manage available courses.
              </p>

              <Link to="/course">
                View Courses
              </Link>

            </div>

            <div className="action-card">

              <i className="fa-solid fa-user-plus"></i>

              <h3>Register Admin</h3>

              <p>
                Create a new administrator account.
              </p>

              <Link to="/admin-register">
                Register
              </Link>

            </div>

            <div className="action-card">

              <i className="fa-solid fa-right-from-bracket"></i>

              <h3>Logout</h3>

              <p>
                Logout from the admin account.
              </p>

              <a
                href="#logout"
                onClick={(event) => {
                  event.preventDefault();
                  handleLogout();
                }}
              >
                Logout
              </a>

            </div>

          </div>

        </div>

        {/* Footer */}
        <footer>
          © 2026 Student Course Management System
        </footer>

      </main>

    </div>
  );
}

export default Dashboard;