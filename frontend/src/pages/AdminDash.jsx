import { Link, Outlet } from "react-router-dom";
import "../css/dashboard.css";
import user from "../images/image.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AdminDash = () => {
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [showUserInfo, setShowUserInfo] = useState(false);
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

  const handleUserIconClick = () => {
    setShowUserInfo(prevState => !prevState);
  };


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>TASK 📝 MANAGEMENT</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard" className="active">
              <i className="fas fa-home"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/insert">
              <i className="fas fa-plus"></i> Insert Task
            </Link>
          </li>
          <li>
            <Link to="/dashboard/display">
              <i className="fas fa-table"></i> Display Task
            </Link>
          </li>
          <li>
            <Link to="/dashboard/search">
              <i className="fas fa-search"></i> Search Employee
            </Link>
          </li>
          <li>
            <Link to="/dashboard/update">
              <i className="fas fa-edit"></i> Update Task
            </Link>
          </li>
          <li>
            <Link to="/dashboard/contact">
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
            <div style={{ height: "100px", width: "200px", marginRight: "50px", marginTop: "20px" }} className="user-details ">
              <p>Welcome: {username}</p>
              <p>Email: {userid}</p>
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

export default AdminDash;
