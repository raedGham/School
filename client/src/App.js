import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Main from './components/nav/main';
import Login from './pages/auth/Login';
import TeachersCreate from './pages/admin/TeachersCreate';
import StudentsCreate from './pages/admin/StudentsCreate';
import SectionsCreate from './pages/admin/SectionsCreate';
import SubjectsCreate from './pages/admin/SubjectsCreate';
import ClassesCreate from './pages/admin/ClassesCreate';
import SubSubjectsCreate from './pages/admin/SubSubjectsCreate';
import AdminDashboard from './pages/admin/AdminDashboard';


function App() {
  return (
    <>

      <BrowserRouter>
        <Main />
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin/dashboard" exact element={<AdminDashboard />} />
          <Route path="/admin/teachers" exact element={<TeachersCreate />} />
          <Route path="/admin/students" exact element={<StudentsCreate />} />
          <Route path="/admin/sections" exact element={<SectionsCreate />} />
          <Route path="/admin/subjects" exact element={<SubjectsCreate />} />
          <Route path="/admin/classes" exact element={<ClassesCreate />} />
          <Route path="/admin/subs" exact element={<SubSubjectsCreate />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
