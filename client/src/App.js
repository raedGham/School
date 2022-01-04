import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Main from './components/nav/main';
import Login from './pages/auth/Login';
import TeachersCreate from './pages/admin/TeachersCreate';
import StudentsCreate from './pages/admin/StudentsCreate'; 
import AdminDashboard from './pages/admin/AdminDashboard';


function App() {
  return (
    <>

      <BrowserRouter>
        <Main />
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/admin/dashboard" exact element={<AdminDashboard/>} />
          <Route path="/admin/teachers" exact element={<TeachersCreate/>} />
          <Route path="/admin/students" exact element={<StudentsCreate/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
