import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/teacher/Home';
import Main from './components/nav/main';
import Login from './pages/auth/Login';
import TeachersCreate from './pages/admin/TeachersCreate';
import StudentsCreate from './pages/admin/StudentsCreate';
import SectionsCreate from './pages/admin/SectionsCreate';
import CoursesCreate from './pages/admin/CoursesCreate';
import ClassesCreate from './pages/admin/ClassesCreate';
import SubCoursesCreate from './pages/admin/SubCoursesCreate';
import AdminDashboard from './pages/admin/AdminDashboard';
import UsersCreate from './pages/admin/UsersCreate';
import YearsCreate from './pages/admin/SchoolYearCreate';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SchoolYearSettings from './pages/admin/SchoolYearSettings';
import StorageComp from './storage';

function App() {
  return (
    <>

      <BrowserRouter>
        <Main />
        <ToastContainer />
        <Routes>
        <Route path="/storage" exact element={<StorageComp />} />        
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin/dashboard" exact element={<AdminDashboard />} />
          <Route path="/admin/teachers" exact element={<TeachersCreate />} />
          <Route path="/admin/students" exact element={<StudentsCreate />} />
          <Route path="/admin/sections" exact element={<SectionsCreate />} />
          <Route path="/admin/courses" exact element={<CoursesCreate />} />
          <Route path="/admin/classes" exact element={<ClassesCreate />} />
          <Route path="/admin/subs" exact element={<SubCoursesCreate />} />
          <Route path="/admin/schoolyears" exact element={<YearsCreate />} />
          <Route path="/admin/schoolyear/settings/:id" exact element={<SchoolYearSettings />} />
          <Route path="/user/accounts" exact element={<UsersCreate />} />
          <Route path="/user/dashboard" exact element={<Home />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
