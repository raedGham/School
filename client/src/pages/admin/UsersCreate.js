import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createUser, getUsers, updateUser, removeUser, resetPass } from '../../functions/user';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import UsersList from '../../components/forms/Users/UsersList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { ImUsers } from "react-icons/im";
import UserCreateForm from '../../components/forms/Users/UserCreateForm';
import UserUpdateForm from "../../components/forms/Users/UserUpdateForm";
import CPModal from '../../components/modal/changePasswordModal';
import Search from '../../components/search/search';


const UsersCreate = () => {
    const initialState = {
        name: "",
        email: "",
        role: "teacher",
    }
    const [values, setValues] = useState(initialState);
    const [password, setPassword] = useState("");
    const { user } = useSelector(state => ({ ...state }));

    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [textSearch, setTextSearch] = useState("");

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    // Modal variables
    const [Modal, setModal] = useState(false);
    const [ModalUser, setModalUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // validation
        if (!values.email || !password) {
            toast.error("Email and password is required");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        console.log("User un handle submit", user);
        createUser(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`);
                setTimeout(() => {
                    setShow(false);
                    loadUsers();
                    console.log(auth);
                    createUserWithEmailAndPassword(auth, values.email, password)
                        .then((cred) => toast.success("Account ready for use..."))
                        .catch((err) => console.log(err));
                    return
                }, 500);
            })
            .catch(err => {
                console.log("create User catch err", err.response)
                //if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateUser(values, user.token)
            .then(res => {
                console.log("UPDATED")

                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadUsers();
                    return
                }, 500);
            })
            .catch((err) => console.log("Update User catch err", err))

    };


    const handleChange = (e) => {
        console.log("HANDLE CHANGE");
        console.log(e.target.value);

        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleRadioChange = (e) => {
        console.log("HANDLE RADIO CHANGE");
        console.log(e.target.value);

        setValues({ ...values, role: e.target.value })
    }

    const handlePasswordChange = (e) => {
        console.log("HANDLE Password CHANGE");
        console.log(e.target.value);

        setPassword(e.target.value)
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
        if (window.confirm("Delete?")) {
            removeUser(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadUsers()
                        return;
                    }, 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }

    const changePassword = (t) => {

        //  alert(t.email);
        setModalUser(t);
        setModal(true);


    }

    const hideModel = () => {
        setModal(false);
    }

    const hideModelAndSave = () => {

        console.log(password);
        console.log(ModalUser);
        //console.log(user.token);
        resetPass(ModalUser.email, password, user.token)
            .then((res) => {
                toast.success("Password sucessfully changed")
            })
            .catch((err) => console.log(err))
        setModal(false);
    }
    const handleSearchChange = (e) => {
        setTextSearch(e.target.value);
        if (textSearch !== "") {
            const filteredUsers = users.filter((u) => {
                return Object.values(u).join(" ").toLowerCase().includes(textSearch.toLowerCase());
            });
            setSearchResults(filteredUsers);
        }
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
                    <Search textSearch={textSearch} handleSearchChange={handleSearchChange} />
                    {<UsersList users={textSearch.length < 1 ? users : searchResults}
                        handleEditClick={(t) => handleEditClick(t)}
                        handleDelete={(t) => handleDelete(t)}
                        changePassword={(t) => changePassword(t)} />}
                </div>

                <div className="col-md-5 text-left m-2">

                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addUser} hidden={showUpdate} >Add User</button>
                        {show ? (<UserCreateForm
                            values={values}
                            password={password}
                            setValues={setValues}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleRadioChange={handleRadioChange}
                            handlePasswordChange={handlePasswordChange}
                        />) : ""}
                        {showUpdate ? <UserUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}

                </div>

                {Modal ? (<CPModal
                    hideModel={hideModel}
                    user={ModalUser}
                    password={password}
                    setPassword={setPassword}
                    hideModelAndSave={hideModelAndSave} />) : ""}


            </div>
        </div>
    );
};

export default UsersCreate;