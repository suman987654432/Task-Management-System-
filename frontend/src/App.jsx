import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDash from './pages/AdminDash';
import AssignTask from './pages/AssignTask';
import CreateUser from './pages/CreateUser';
import DisplayTask from './pages/DisplayTask';
import SearchEmp from './pages/SearchEmp';
import UpdateTask from "./pages/UpdateTask";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}>
            <Route path='login' element={<LoginPage />} />
            {/* <Route path='footer' element={<Footer />} /> */}


          </Route>
          <Route path='dashboard' element={<AdminDash />} >
            <Route path='asign' element={<AssignTask />} />
            <Route path='create' element={<CreateUser />} />
            <Route path='display' element={<DisplayTask />} />
            <Route path='search' element={<SearchEmp />} />
            <Route path='update' element={<UpdateTask />} />


          </Route >

        </Routes>



      </BrowserRouter>

    </>
  )
}

export default App