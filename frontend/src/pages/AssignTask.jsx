import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const AssignTask = () => {
    const [mydata, setMydata] = useState([]);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({});
    const [empId, setEmpId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (empid) => {
        setEmpId(empid);
        setShow(true);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async () => {
        let api = "http://localhost:8080/admin/assigntask";
        try {
            await axios.post(api, { empid: empId, ...input });
            alert("Task assigned successfully!");
            setShow(false); // Close modal after submission
        } catch (error) {
            console.error(error);
        }
    };

    const loadData = async () => {
        let api = "http://localhost:8080/admin/assigntaskdisplay";
        try {
            const response = await axios.get(api);
            setMydata(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container fluid className="p-3">
            <h1 className="text-center mb-4">Assign Task To User</h1>

            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <Table striped bordered hover responsive="sm">

                        <thead className="text-center">
                            <tr>
                                <th>Emp Name</th>
                                <th>Designation</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((key) => (
                                <tr key={key._id}>
                                    <td>{key.username}</td>
                                    <td>{key.designation}</td>
                                    <td>{key.email}</td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center">
                                            <Button variant="success" className="w-100" onClick={() => handleShow(key._id)}>
                                                Assign Task
                                            </Button>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Modal for Assigning Task */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Assign Task To Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="tasktitle"
                                value={input.tasktitle || ""}
                                onChange={handleInput}
                                placeholder="Enter task title"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="taskdescription"
                                value={input.taskdescription || ""}
                                onChange={handleInput}
                                placeholder="Enter task description"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Completion Days</Form.Label>
                            <Form.Control
                                type="number"
                                name="compdays"
                                value={input.compdays || ""}
                                onChange={handleInput}
                                placeholder="Enter completion days"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AssignTask;
