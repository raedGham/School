import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createCourse, getCourses, updateCourse, removeCourse } from '../../functions/course';
import {getSubCourses} from '../../functions/subCourse';
import CoursesList from '../../components/forms/Courses/CoursesList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import CourseCreateForm from '../../components/forms/Courses/CoursesCreateForm';
import CourseUpdateForm from "../../components/forms/Courses/CoursesUpdateForm";
import {FaBookOpen} from "react-icons/fa";


const CoursesCreate = () => {
    const initialState = {
        name: "",
        code: "",
        subs:[]
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [subs, setSubs] = useState([]);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
        createCourse(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)

                setTimeout(() => {

                    setShow(false);
                    loadCourses();
                    return
                }

                    , 1000);
            })
            .catch(err => {
                console.log("create course catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateCourse(values, user.token)
            .then(res => {
                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadCourses();
                    return
                }, 1000);
            })
            .catch((err) => console.log("Update course catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        console.log("load course executes from useEffect");
        loadCourses();
        loadSubs();
    }, []);

    const loadCourses = () => {
        getCourses()
            .then((t) => {
                setCourses(t.data);
            }
            )
            .catch((err)=> console.log("ERR SUBJECTS===> ", err))
    }

    const loadSubs = () => {
        getSubCourses()
            .then((s) => {
                setSubs(s.data);
            })
            .catch((err)=> console.log("ERR SUBS===> ", err))
            
    }
    const addCourse = () => {
        setValues(initialState);
        if (showUpdate) setShowUpdate(false);
        if (!show) setShow(true);

    }


    const handleEditClick = (t) => {
        setValues({ ...t });
        //   console.log(values);
        if (show) setShow(false);
        if (!showUpdate) setShowUpdate(true);
    }

    const handleDelete = (id) => {
        if (window.confirm("Delete?")) {
            removeCourse(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadCourses();
                        return
                    }, 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }

    const handleSubChange = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        console.log("value---->", value)
        setValues({ ...values, subs: value })
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <FaBookOpen className='iconLabelsize'/>  
                        <span className='h4'> Courses </span>
                    </>)}

                    {<CoursesList courses={courses} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} />}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addCourse} hidden={showUpdate} >Add Course</button>
                        {show ? (<CourseCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} subs = {subs}
                                                         handleSubChange={handleSubChange} />) : ""}
                        {showUpdate ? <CourseUpdateForm values={values} 
                                                         setValues={setValues} 
                                                         handleChange={handleChange} 
                                                         handleUpdateSubmit={handleUpdateSubmit} 
                                                         subs = {subs}
                                                         handleSubChange={handleSubChange} /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default CoursesCreate;