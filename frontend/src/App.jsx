import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AsdminDash from './pages/AdminDash';
// import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}>
            <Route path='login' element={<LoginPage />} />
            {/* <Route path='footer' element={<Footer />} /> */}


          </Route>
          <Route path='admin' element={<AsdminDash />} />

        </Routes>



      </BrowserRouter>

    </>
  )
}

export default App