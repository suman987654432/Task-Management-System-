import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image from "../images/task.png";
import logo from "../images/logo1.png";
import "../css/login.css";
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUsertype] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (usertype === "admin") {
            try {
                let api = "http://localhost:8080/admin/adminlogin";
                const response = await axios.post(api, { userid, password });
                console.log(response.data);
                if (response.status === 200) {
                    message.success("Login successfully");
                    navigate("/admin");
                }
            } catch (error) {
                message.error(error.response?.data?.msg || "An error occurred");
            }
        } else {
            message.warning("Please select a role");
        }
    };

    return (
        <>
            <div className="login-page">
                <img src={logo} alt="Task Management" className='logo' />
                <h1 className="title"><span>Task Management System</span></h1>
                <div className="content-wrapper">
                    <div className="image-section">
                        <img src={image} alt="Task Management" />
                    </div>
                    <div className="form-section">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter your ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={userid}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Enter your Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicRole">
                                <Form.Label>Select Role</Form.Label>
                                <Form.Select
                                    value={usertype}
                                    onChange={(e) => setUsertype(e.target.value)}
                                >
                                    <option value="">Select a role</option>
                                    <option value="admin">Admin</option>
                                    <option value="employee">Employee</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="login-button">
                                Log In
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
