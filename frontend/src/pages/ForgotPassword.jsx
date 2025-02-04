import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Forgotpass.css"; // Import CSS

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    const storedPassword = localStorage.getItem("emppassword"); // Local Storage se Password lo

    if (!storedPassword) {
      alert("No old password found!");
      return;
    }

    try {
      // Backend API ko request bhejo password update ke liye
      const response = await axios.post("http://localhost:8080/employee/reset-password", {
        email,
        newPassword
      });

      alert(response.data.msg); // Success Message
      localStorage.setItem("emppassword", newPassword); // Local Storage me update karo
      navigate("/login"); // Login Page pe bhejo
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
