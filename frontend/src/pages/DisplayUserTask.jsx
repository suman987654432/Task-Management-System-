
import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
const DisplayUserTask = () => {
    const empid = localStorage.getItem("empid");
    const [mydata, setMydata] = useState([]);

    const loadData = async () => {
        try {
            let api = "http://localhost:8080/employee/employeetaskdisplay";
            const response = await axios.post(api, { empid: empid })
            setMydata(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
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
                    {/* <td> */}
                    {/* <Form.Select size="sm" name="taskStatus" value={taskStatus} onChange={(e) => { setTaskStatus(e.target.value) }}>
                            <option> Select Task</option>
                            <option value="Fully Completed">Fully Completed</option>
                            <option value="Partial Completed">Partial Completed</option>
                            <option value="No Completed">No Completed</option>
                        </Form.Select> */}

                    {/* </td> */}
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>Your Task</h1>
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

        </>
    )
}

export default DisplayUserTask