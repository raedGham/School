import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { FaChalkboardTeacher, FaBookReader, FaBookOpen, FaSwatchbook, FaChalkboard, FaBuromobelexperte } from "react-icons/fa";

const AdminNav = () => {


    return (

        <nav className='nav-menu active' >
            <ul className='nav-menu-items'>

                <li className='nav-text' >
                    <Link to="/admin/dashboard" className='nav-link'> <AiOutlineDashboard /> <span>DASHBOARD</span></Link>
                </li>

                <li className='nav-text'>
                    <Link to="/admin/teachers" className='nav-link'><FaChalkboardTeacher /> <span>TEACHERS</span></Link>
                </li>

                <li className='nav-text'>
                    <Link to="/admin/students" className='nav-link'><FaBookReader /> <span>STUDENTS</span></Link>
                </li>
                <hr />

                <li className='nav-text'>
                    <Link to="/admin/courses" className='nav-link'><FaBookOpen /> <span>COURSES</span></Link>
                </li>
                <li className='nav-text'>
                    <Link to="/admin/subs" className='nav-link'><FaSwatchbook /> <span>SUB COURSES</span></Link>
                </li>
                <hr />

                <li className='nav-text'>
                    <Link to="/admin/Classes" className='nav-link'><FaChalkboard /> <span>CLASSES</span></Link>
                </li>

                <li className='nav-text'>
                    <Link to="/admin/sections" className='nav-link'><FaBuromobelexperte /> <span>SECTIONS</span></Link>
                </li>
                <hr />

                <li className='nav-text'>
                    <Link to="/user/accounts" className='nav-link'><ImUsers /> <span>USERS ACCOUNTS</span></Link>
                </li>

            </ul>
        </nav>


    );
};

export default AdminNav;