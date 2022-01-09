import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { FaChalkboardTeacher, FaBookReader, FaBookOpen, FaSwatchbook, FaChalkboard, FaBuromobelexperte } from "react-icons/fa";

const AdminNav = () => {
    return (

        <nav className="bg-light" >
            <ul className='nav flex-column'>

                <li className='nav-item' >
                    <Link to="/admin/dashboard" className='nav-link'> <AiOutlineDashboard /> DASHBOARD</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/teachers" className='nav-link'><FaChalkboardTeacher /> TEACHERS</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/students" className='nav-link'><FaBookReader /> STUDENTS</Link>
                </li>
                <hr />

                <li className='nav-item'>
                    <Link to="/admin/subjects" className='nav-link'><FaBookOpen /> SUBJECTS</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/admin/subs" className='nav-link'><FaSwatchbook /> SUBS of SUBJECTS</Link>
                </li>
                <hr />

                <li className='nav-item'>
                    <Link to="/admin/Classes" className='nav-link'><FaChalkboard /> CLASSES</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/sections" className='nav-link'><FaBuromobelexperte /> SECTIONS</Link>
                </li>
                <hr />

                <li className='nav-item'>
                    <Link to="/user/accounts" className='nav-link'><ImUsers /> USERS ACCOUNTS</Link>
                </li>

            </ul>
        </nav>


    );
};

export default AdminNav;