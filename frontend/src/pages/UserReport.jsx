
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import rightimg from "../images/right.jpeg";
import wrongimg from "../images/wrong.jpeg";
import Button from 'react-bootstrap/Button';
import { message } from "antd";
const UserReport = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8080/admin/showreport";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, [])


  const reassignTask = async (taskid) => {
    let api = "http://localhost:8080/admin/taskreassing";
    try {
      const response = await axios.post(api, { taskid: taskid });
      message.success(response.data.msg);
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
          <td>

            {key.empreport == "submited" ? (
              <img src={rightimg} width="40" height="40" />
            ) : (
              <img src={wrongimg} width="40" height="40" />
            )}

          </td>
          <td> {sno}</td>
          <td> {key.empid.username} </td>
          <td> {key.empid.designation} </td>
          <td> {key.empid.email} </td>
          <td> {key.tasktitle} </td>
          <td> {key.taskdescription} </td>
          <td> {key.completiondays} </td>
          <td> {key.taskstatus} </td>
          <td>
            {key.empreport == "submited" ? (
              <>
                <span style={{ color: "green", fontWeight: "bold" }}>{key.empreport} </span>
              </>
            ) : (
              <>
                <span style={{ color: "red", fontWeight: "bold" }}>{key.empreport} </span>
              </>
            )} </td>

          <td>
            <div className="d-flex justify-content-center">
              <Button variant="primary" size="sm" className="w-100"
                onClick={() => { reassignTask(key._id) }}
                style={{ fontSize: "10px" }}>
                ReAssign
              </Button>
            </div>
          </td>

        </tr>
      </>
    )
  })



  return (
    <>
      <h1> Show User Report</h1>
      <Table striped bordered hover responsive="sm" style={{ fontSize: '12px' }}>

        <thead>
          <tr>

            <th>s.no</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Assign Days</th>
            <th> Task Status</th>
            <th> Report </th>
            <th> Action </th>
            <th>  </th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </Table>
    </>
  )
}

export default UserReport;