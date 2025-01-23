import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image from "../images/task.png";
import logo from "../images/logo1.png";
import "../css/login.css";
import Footer from '../components/Footer';

const LoginPage = () => {
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
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter ID</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Enter Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicRole">
                                <Form.Label>Select Role</Form.Label>
                                <Form.Select>
                                    <option value="">Select a role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
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
