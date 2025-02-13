import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDash from './pages/AdminDash';
import AssignTask from './pages/AssignTask';
import CreateUser from './pages/CreateUser';
import DisplayUserTask from './pages/DisplayUserTask';
import SearchEmp from './pages/SearchEmp';
import UserReport from './pages/UserReport';
import ForgotPassword from './pages/ForgotPassword';
import UserDashboardPage from './pages/UserDashboardPage';

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
            <Route path='userreport' element={<UserReport />} />

            <Route path='search' element={<SearchEmp />} />
          </Route >

          <Route path="userdashboard" element={<UserDashboardPage />}>
            <Route path='usertask' element={<DisplayUserTask />} />
            <Route path='forgotpass' element={<ForgotPassword />} />
          </Route >

        </Routes>



      </BrowserRouter>

    </>
  )
}

export default App