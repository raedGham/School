import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createTeacher, getTeachers, updateTeacher, removeTeacher } from '../../functions/teacher';
import { createUser } from '../../functions/auth';
import TeachersList from '../../components/forms/Teachers/TeachersList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import TeacherCreateForm from '../../components/forms/Teachers/TeacherCreateForm';
import TeacherUpdateForm from "../../components/forms/Teachers/TeacherUpdateForm";

import { FaChalkboardTeacher } from "react-icons/fa";
import Search from '../../components/search/search';

const TeachersCreate = () => {
    const initialState = {
        name: "",
        email: "",
        address: "",
        mobile: undefined,
        birthDate: "",
        startDate: "",
        degree: "",
        hasAccount: false

    }
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { user } = useSelector(state => ({ ...state }));
    const [teachers, setTeachers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [textSearch, setTextSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

   const validate = (values) => {
     const err = {};
     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (!values.name) {
         err.name = "Teacher name is required!";
     }
     if (!values.email) {
        err.email = "Teacher Email is required!"}
     else if (!regex.test(values.email))   {
     err.email = "This is not a valid Email!";
    }

    return err;
   }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setErrors(validate(values));
        setIsSubmit(true);
        
        createTeacher(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)
                setTimeout(() => {
                    setShow(false);
                    loadTeachers();
                    return
                }, 500);
            })
            .catch(err => {
                console.log("create Teacher catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateTeacher(values, user.token)
            .then(res => {
                console.log("UPDATED")

                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadTeachers();
                    return
                }, 500);
            })
            .catch((err) => console.log("Update Teacher catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => loadTeachers(), []);

    useEffect(() => {
        console.log("Errors:", errors);
        if (Object.keys(errors).length ===0 && isSubmit) {
            console.log(values);
        }
    }, [errors]);
    const loadTeachers = () => {
        if (show) setShow(false);
        if (showUpdate) setShowUpdate(false);
        getTeachers()
            .then((t) => {
                setTeachers(t.data);
            }
            )
    }

    const addTeacher = () => {
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
            removeTeacher(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadTeachers()
                        return;
                    }, 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }

    const addUser = (t) => {
        //   console.log("t", t)
        const userData = {
            name: t.name,
            email: t.email,
        }
        createUser(userData, user.token).then(res => console.log(res));

        const teacherUpdate = { ...t, hasAccount: true };
        //   console.log("teacherUpdate", teacherUpdate);
        updateTeacher(teacherUpdate, user.token)
            .then(res => {
                console.log("UPDATED")

                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadTeachers();
                    return
                }, 500);
            })
            .catch((err) => console.log("Update Teacher catch err", err))
    }

    const handleSearchChange = (e) => {
        setTextSearch(e.target.value);
        if (textSearch !== "") {
            const filteredStudents = teachers.filter((teacher) => {
                return Object.values(teacher).join(" ").toLowerCase().includes(textSearch.toLowerCase());
            });
            setSearchResults(filteredStudents);
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <FaChalkboardTeacher className='iconLabelsize' />
                        <span className='h4'> Teachers </span>
                    </>)}
                    <Search textSearch={textSearch} handleSearchChange={handleSearchChange} />
                    {<TeachersList teachers={textSearch.length < 1 ? teachers : searchResults}
                        handleEditClick={(t) => handleEditClick(t)}
                        handleDelete={(t) => handleDelete(t)}
                        addUser={(t) => addUser(t)} />}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addTeacher} hidden={showUpdate} >Add Teacher</button>
                        {show ? (<TeacherCreateForm values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />) : ""}
                        {showUpdate ? <TeacherUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default TeachersCreate;