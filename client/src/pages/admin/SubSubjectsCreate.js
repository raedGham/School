import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createSubSubject, getSubSubjects, updateSubSubject, removeSubSubject } from '../../functions/subSubject';
import SubjectsList from '../../components/forms/SubSubjects/SubSubjectsList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SubSubjectCreateForm from '../../components/forms/SubSubjects/SubSubjectsCreateForm';
import SubSubjectUpdateForm from "../../components/forms/SubSubjects/SubSubjectsUpdateForm";



const SubSubjectsCreate = () => {
    const initialState = {
        name: "",
        code: "",
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [subSubjects, setSubSubjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
        createSubSubject(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)

                setTimeout(() => {

                    setShow(false);
                    loadSubSubjects();
                    return
                }

                    , 1000);
            })
            .catch(err => {
                console.log("create SubSubject catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateSubSubject(values, user.token)
            .then(res => {
                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadSubSubjects();
                    return
                }, 1000);
            })
            .catch((err) => console.log("Update SubSubject catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        console.log("load subSubject executes from useEffect");
        loadSubSubjects()
    }, []);

    const loadSubSubjects = () => {
        getSubSubjects()
            .then((t) => {
                setSubSubjects(t.data);
            }
            )
    }

    const addSubSubject = () => {
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
            removeSubSubject(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadSubSubjects();
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
                <div className="col-md-2">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <i className="fas fa-swatchbook fa-2x"></i>
                        <span className='h4'> Sub Subjects </span>
                    </>)}
                    {console.log(subSubjects)}
                    {subSubjects !== undefined ? <SubjectsList subSubjects={subSubjects} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} /> : <p className='mt-2'>No Subs yet</p>}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addSubSubject} hidden={showUpdate} >Add SubSubject</button>
                        {show ? (<SubSubjectCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} />) : ""}
                        {showUpdate ? <SubSubjectUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default SubSubjectsCreate;