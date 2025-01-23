import { Link, Outlet } from "react-router-dom";
import "../css/dashboard.css";
import user from "../images/image.png";



const AdminDash = () => {


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
            <Link to="/" className="logout" >
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
          <div className="user-info" >
            <img src={user} alt="User Icon" className="user-icon" />
          </div>


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
