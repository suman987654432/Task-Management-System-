import { Link, Outlet } from "react-router-dom";
import "../css/dashboard.css";
import user from "../images/image.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate()
  const [empNmae, setempName] = useState("")
  const [empEmail, setEmpEmail] = useState("")
  const [showUserInfo, setShowUserInfo] = useState(false);
  useEffect(() => {
    setempName(localStorage.getItem("empname"))
    setEmpEmail(localStorage.getItem("empemail"))
  }, [])


  const handleUserIconClick = () => {
    setShowUserInfo(prevState => !prevState);
  };
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>EMPLOYEE📝 DASHBOARD</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="" className="active">
              <i className="fas fa-home"></i> Dashboard
            </Link>
          </li>

          <li>
            <Link to="usertask">
              <i className="fas fa-table"></i> Display Task
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-search"></i> Search Employee
            </Link>
          </li>

          <li>
            <Link to="">
              <i className="fas fa-address-book"></i> Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="logout" onClick={logout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>


          <div className="search-bar">
            <input type="text" placeholder="Search here..." />
          </div>
          <div className="user-info" onClick={handleUserIconClick}>
            <img src={user} alt="User Icon" className="user-icon" />
          </div>

          {showUserInfo && (
            <div style={{ height: "130px", width: "200px", marginRight: "50px", marginTop: "20px" }} className="user-details ">
              <p>Welcome: {empNmae}</p>
              <p>Email: {empEmail}</p>
            </div>
          )}

        </header>
        <main>
          <h1>Welcome to the Dashboard</h1>

          {/* <img className="suman" style={{ height: "80vh", width: "100%" }} src={image} alt="" /> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
