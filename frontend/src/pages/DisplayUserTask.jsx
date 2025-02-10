import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
// import "../css/responsive.css";

const DisplayUserTask = () => {
    const empid = localStorage.getItem("empid");
    const [mydata, setMydata] = useState([]);
    const [taskStatus, setTaskStatus] = useState("");
    const loadData = async () => {
        try {
            let api = "https://task-management-system-4-ydf7.onrender.com/employee/employeetaskdisplay";
            const response = await axios.post(api, { empid: empid })
            setMydata(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    const taskSubmit = async (taskid) => {
        try {
            let api = "https://task-management-system-4-ydf7.onrender.com/employee/employeetasksubmit";

            const response = await axios.post(api, { taskid: taskid, taskstatus: taskStatus });
            alert(response.data);
            loadData();
        } catch (error) {
            console.log(error);
        }
    }
    let sno = 0;
    const ans = mydata.map((key) => {
        sno++;
        return (
            <>
                <tr>
                    <td>{sno}</td>
                    <td> {key.tasktitle}</td>
                    <td> {key.taskdescription}</td>
                    <td> {key.completiondays}</td>
                    <td>
                        <Form.Select size="sm" name="taskStatus" value={taskStatus} onChange={(e) => { setTaskStatus(e.target.value) }}>
                            <option> Select Task</option>
                            <option value="Fully Completed">Fully Completed</option>
                            <option value="Partial Completed">Partial Completed</option>
                            <option value="No Completed">No Completed</option>
                        </Form.Select>
                    </td>
                    <td>
                        {key.empreport == "submited" ? (<Button disabled>submitted</Button>) : (<Button onClick={() => { taskSubmit(key._id) }}>Send</Button>)}
                    </td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1 className="responsive-heading">Your Task</h1>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>Task Title</th>
                            <th>Description</th>
                            <th>Total Days</th>
                            <th> Status</th>
                            <th> Send Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default DisplayUserTask;
