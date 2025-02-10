import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dashboard.css";
import user from "../images/image.png";

const AdminDash = () => {
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/");
    } else {
      setUsername(localStorage.getItem("username"));
      setUserid(localStorage.getItem("userid"));
    }
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>
        <div className="sidebar-brand">
          <h2>TASK 📝 MANAGEMENT</h2>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard"><i className="fas fa-home"></i> Dashboard</Link></li>
          <li><Link to="/dashboard/asign"><i className="fas fa-tasks"></i> Assign Task</Link></li>
          <li><Link to="/dashboard/create"><i className="fas fa-user-plus"></i> New User</Link></li>
          <li><Link to="/dashboard/search"><i className="fas fa-search"></i> Search Employee</Link></li>
          <li><Link to="/dashboard/userreport"><i className="fas fa-chart-line"></i> Show Report</Link></li>
          <li><Link to="/dashboard/contact"><i className="fas fa-address-book"></i> Contact</Link></li>
          <li><Link to="/" className="logout" onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          <div className="search-bar"><input type="text" placeholder="Search here..." /></div>
          <div className="user-info" onClick={() => setShowUserInfo(!showUserInfo)}>
            <img src={user} alt="User Icon" className="user-icon" />
          </div>
          {showUserInfo && <div className="user-details"><p>Welcome: {username}</p><p>Email: {userid}</p></div>}
        </header>
        <main>
          <h1>Welcome to the Dashboard</h1>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDash;
