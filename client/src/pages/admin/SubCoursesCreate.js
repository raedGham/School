import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createSubCourse, getSubCourses, updateSubCourse, removeSubCourse } from '../../functions/subCourse';
import CoursesList from '../../components/forms/SubCourses/SubCoursesList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SubCourseCreateForm from '../../components/forms/SubCourses/SubCoursesCreateForm';
import SubCourseUpdateForm from "../../components/forms/SubCourses/SubCoursesUpdateForm";



const SubCoursesCreate = () => {
    const initialState = {
        name: "",
        code: "",
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [subCourses, setSubCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
        createSubCourse(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)

                setTimeout(() => {

                    setShow(false);
                    loadSubCourses();
                    return
                }

                    , 1000);
            })
            .catch(err => {
                console.log("create SubCourse catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateSubCourse(values, user.token)
            .then(res => {
                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadSubCourses();
                    return
                }, 1000);
            })
            .catch((err) => console.log("Update SubCourse catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        console.log("load subCourse executes from useEffect");
        loadSubCourses()
    }, []);

    const loadSubCourses = () => {
        getSubCourses()
            .then((t) => {
                setSubCourses(t.data);
            }
            )
    }

    const addSubCourse = () => {
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
            removeSubCourse(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadSubCourses();
                        return
                    }, 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <i className="fas fa-swatchbook fa-2x"></i>
                        <span className='h4'> Sub Courses </span>
                    </>)}
                    {console.log(subCourses)}
                    {subCourses !== undefined ? <CoursesList subCourses={subCourses} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} /> : <p className='mt-2'>No Subs yet</p>}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addSubCourse} hidden={showUpdate} >Add SubCourse</button>
                        {show ? (<SubCourseCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} />) : ""}
                        {showUpdate ? <SubCourseUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default SubCoursesCreate;