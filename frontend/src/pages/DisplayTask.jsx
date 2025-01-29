import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DisplayTask = () => {
  const [mydata, setMydata] = useState([]); // Stores employee data
  const [show, setShow] = useState(false); // Controls modal visibility
  const [input, setInput] = useState({}); // Stores form input values
  const [empId, setEmpId] = useState(""); // Stores selected employee ID

  const handleClose = () => setShow(false);
  const handleShow = (empid) => {
    setEmpId(empid);
    setShow(true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    const api = "http://localhost:8080/admin/assigntask";
    try {
      await axios.post(api, { empid: empId, ...input });
      alert("Task assigned successfully");
      handleClose();
    } catch (error) {
      console.error("Error assigning task:", error);
      alert("Failed to assign task. Please try again.");
    }
  };

  const loadData = async () => {
    const api = "http://localhost:8080/admin/assigntaskdisplay";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.username} </td>
          <td> {key.designation} </td>
          <td> {key.email} </td>
          <td>
            <Button variant="success" onClick={() => { handleShow(key._id) }}>Assign Task</Button>


          </td>
        </tr>
      </>
    )
  })

  return (
    <>
      <h1>Assign Task To User</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Emp Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {ans}
        </tbody>
      </Table>

      Modal for assigning tasks
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task To Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Task Title:</label>
          <input
            type="text"
            name="tasktitle"
            value={input.tasktitle || ""}
            onChange={handleInput}
            className="form-control"
          />
          <br />
          <label>Task Description:</label>
          <textarea
            rows="4"
            cols="50"
            name="taskdescription"
            value={input.taskdescription || ""}
            onChange={handleInput}
            className="form-control"
          />
          <br />
          <label>Completion Days:</label>
          <input
            type="number"
            name="compdays"
            value={input.compdays || ""}
            onChange={handleInput}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DisplayTask;
