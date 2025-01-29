
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// const AssignTask=()=>{
//     const [mydata, setMydata]= useState([]);      
//     const [show, setShow] = useState(false);
//     const [input, setInput]= useState({});
//     const [empId, setEmpId]=useState("");
//   const handleClose = () => setShow(false);
//   const handleShow = (empid) =>{
//     setEmpId(empid);
//     setShow(true);
//   } 
//   const handleInput=(e)=>{
//    let name=e.target.name;
//    let value= e.target.value; 
//    setInput(values=>({...values, [name]:value}));
//    console.log(input);
//   }


//   const handleSubmit=async()=>{
//     let api="http://localhost:8080/admin/assigntask";

//     try {
//          const response = await axios.post(api, {empid:empId, ...input});
//          alert("task assign")
//     } catch (error) {
//         console.log(error);
//     }
    
//   }

//     const loadData=async()=>{
//         let api="http://localhost:8080/admin/assigntaskdisplay";
//         try {
//             const response= await axios.get(api);
//             setMydata(response.data);
//             console.log(response.data);    
//         } catch (error) {
//              console.log(error);
//         }
//     }
//      useEffect(()=>{
//         loadData();
//      }, []);


//      const ans= mydata.map((key)=>{
//            return(
//             <>
//               <tr>
//                  <td> {key.empname} </td>
//                  <td> {key.designation} </td>
//                  <td> {key.email} </td> 
//                  <td>
               
//   <Button variant="success" onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
                    
//                   </td>  
//               </tr>
//             </>
//            )
//      })


//     return(
//         <>
//             <h1> Assign Task To User</h1> 
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Emp Name</th>
//           <th>Designation</th>
//           <th>Email</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//       </tbody>
//      </Table>   


//      <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Assign Task To Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Enter Task Title : <input type="text" name="tasktitle" value={input.tasktitle}
//           onChange={handleInput} />
//           <br/>
//           Enter Description : 
//           <br/>
//           <textarea rows="4" cols="50" name="taskdescription" 
//           value={input.taskdescription}
//           onChange={handleInput} />
         
//           <br/>

//           Enter Completion Days : 
//           <br/>
//           <input type="number" name="compdays" value={input.compdays}
//           onChange={handleInput} />

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="success" onClick={handleSubmit}>
//            Save!!!
//           </Button>
//         </Modal.Footer>
//       </Modal>   
//         </>
//     )
// }
// export default AssignTask;
