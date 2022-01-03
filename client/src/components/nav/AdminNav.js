import React from 'react';
import { Link } from 'react-router-dom';



const AdminNav = () => {
    return (
        
        <nav className = "bg-light" >
            <ul className='nav flex-column'>

                <li className='nav-item' >
                    <Link to="/admin/dashboard" className='nav-link'>DASHBOARD</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/teachers" className='nav-link'>TEACHERS</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/students" className='nav-link'>STUDENTS</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/ClassNamees" className='nav-link'>CLASSES</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/admin/sections" className='nav-link'>SECTIONS</Link>
                </li>
           
                <li className='nav-item'>
                    <Link to="/user/accounts" className='nav-link'>USERS ACCOUNTS</Link>
                </li>

            </ul>
        </nav>
        

    );
};

export default AdminNav;