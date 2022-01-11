import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
//import { createUser, getUsers, updateUser, removeUser } from '../../functions/user';
import { getUsers } from '../../functions/user';
import UsersList from '../../components/forms/Users/UsersList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { ImUsers } from "react-icons/im";
// import UserCreateForm from '../../components/forms/Users/UserCreateForm';
// import UserUpdateForm from "../../components/forms/Users/UserUpdateForm";



const UsersCreate = () => {
    const initialState = {
        name: "",
        email: "",
        role: "teacher",
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
        // createUser(values, user.token)
        //     .then(res => {
        //         toast.success(`${res.data.name} created Sucessfully`)
        //         setTimeout(() => {
        //             setShow(false);
        //             loadUsers();
        //             return
        //         }, 500);
        //     })
        //     .catch(err => {
        //         console.log("create User catch err", err.response)
        //         if (err.response.status === 400) toast.error(err.response.data);
        //     })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        // updateUser(values, user.token)
        //     .then(res => {
        //         console.log("UPDATED")

        //         toast.success(` Updated Sucessfully`)
        //         setTimeout(() => {
        //             setShowUpdate(false);
        //             loadUsers();
        //             return
        //         }, 500);
        //     })
        //     .catch((err) => console.log("Update User catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => loadUsers(), []);

    const loadUsers = () => {
        if (show) setShow(false);
        if (showUpdate) setShowUpdate(false);
        getUsers()
            .then((u) => {
                setUsers(u.data);
            }
            )
    }

    const addUser = () => {
        setValues(initialState);
        if (showUpdate) setShowUpdate(false);
        if (!show) setShow(true);
    }


    const handleEditClick = (t) => {
        setValues({ ...t });
        console.log(values);
        if (show) setShow(false);
        if (!showUpdate) setShowUpdate(true);
    }

    const handleDelete = (id) => {
        // if (window.confirm("Delete?")) {
        //     removeUser(id, user.token)
        //         .then(res => {
        //             toast.error(`${res.data.name} REMOVED`);
        //             setTimeout(() => {
        //                 loadUsers()
        //                 return;
        //             }, 500);
        //         }).catch((err) => {
        //             if (err.response.status === 400) toast.error(err.response.data)
        //         })
        // }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <ImUsers className='iconLabelsize' />
                        <span className='h4'> Users </span>
                    </>)}

                    {<UsersList users={users} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} />}
                </div>

                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addUser} hidden={showUpdate} >Add User</button>
                        {/* {show ? (<UserCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} />) : ""}
                        {showUpdate ? <UserUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""} */}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default UsersCreate;