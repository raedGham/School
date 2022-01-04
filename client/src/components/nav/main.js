import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
    
    const { user} = useSelector((state) => ({...state}));

    return (
        
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <i className="fas fa-school"></i>School</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        {!user && (
                        <li className="nav-item" >
                            <Link to="/login" > Login </Link>
                        </li>)}

                        { user && (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             {user.email} 
                            </a>
                            
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {user && user.role === "teacher" && <li><Link to="/user/history">User Dashboard </Link></li>}
                                {user && user.role === "admin" && <li><Link to="/admin/dashboard">Admin Dashboard </Link></li>}                                                           
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>)}

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        
    );
};

export default Main;