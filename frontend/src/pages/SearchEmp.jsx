import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchEmp = () => {
    const [mydata, setMydata] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        let api = "https://task-management-system-5-cg0y.onrender.com/admin/assigntaskdisplay";
        try {
            const response = await axios.get(api);
            setMydata(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Search only by name
    const filteredData = mydata.filter((emp) =>
        emp.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container fluid className="p-3">
            <h2 className="text-center mb-4">Search Employees</h2>

            <Row className="justify-content-center mb-3">
                <Col xs={12} md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search by employee name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <Table striped bordered hover responsive>
                        <thead className="text-center">
                            <tr>
                                <th>Employee Name</th>
                                <th>Designation</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((emp) => (
                                    <tr key={emp._id}>
                                        <td>{emp.username}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center text-muted">
                                        No matching records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchEmp;
