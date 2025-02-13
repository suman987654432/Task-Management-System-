import { Link, Outlet,useNavigate } from "react-router-dom";
import "../css/dashboard.css";
import user from "../images/image.png";
import { useState, useEffect } from "react";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setEmpName(localStorage.getItem("empname"));
    setEmpEmail(localStorage.getItem("empemail"));
  }, []);

  const handleUserIconClick = () => {
    setShowUserInfo(prevState => !prevState);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>
        <div className="sidebar-brand">
          <h2>EMPLOYEE 📝 DASHBOARD</h2>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard"><i className="fas fa-home"></i> Dashboard</Link></li>
          <li><Link to="usertask"><i className="fas fa-tasks"></i> Display Task</Link></li>
          <li><Link to="/dashboard/contact"><i className="fas fa-address-book"></i> Contact</Link></li>
          <li><Link to="forgotpass"><i className="fas fa-key"></i> Forgot Password</Link></li>
          <li><Link to="/" className="logout" onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          <div className="search-bar"><input type="text" placeholder="Search here..." /></div>
          <div className="user-info" onClick={handleUserIconClick}>
            <img src={user} alt="User Icon" className="user-icon" />
          </div>
          {showUserInfo && (
            <div className="user-details">
              <p>Welcome: {empName}</p>
              <p>Email: {empEmail}</p>
            </div>
          )}
        </header>
        <main>
          <h1>Welcome to the Dashboard</h1>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;