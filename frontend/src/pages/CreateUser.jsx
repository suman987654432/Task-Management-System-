import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { message } from 'antd';

const CreateUser = () => {
    const [input, setInput] = useState({
        username: "",
        designation: "",
        email: "",
        password: "",
    });

    // Handle input changes
    const handleInput = (e) => {
        console.log(input);
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        const api = "http://localhost:8080/admin/createuser";
        try {
            const response = await axios.post(api, input);
            console.log(response.data);
            if (response.status === 201 || response.status === 200) {
                message.success(response.data.msg || "User created successfully!");
                setInput({
                    username: "",
                    designation: "",
                    email: "",
                    password: "",
                }); // Reset the form
            }
        } catch (error) {
            console.error(error);
            message.error(error.response?.data?.msg || "Failed to create user!");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
            <div className="w-100 p-4 shadow-lg bg-white rounded" style={{ maxWidth: "400px" }}>
                <h1 className="text-center mb-4 fs-4">Create New User</h1>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Employee Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={input.username}
                            onChange={handleInput}
                            placeholder="Enter name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Designation</Form.Label>
                        <Form.Select
                            name="designation"
                            value={input.designation}
                            onChange={handleInput}
                        >
                            <option value="">Select Designation</option>
                            <option value="Frontend">Front End Designer</option>
                            <option value="Backend">Back End Designer</option>
                            <option value="Analyst">Analyst</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter User Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleInput}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={handleInput}
                            placeholder="Enter password"
                        />
                    </Form.Group>

                    <Button variant="primary" type="button" className="w-100" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CreateUser;
