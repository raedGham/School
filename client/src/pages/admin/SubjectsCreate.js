import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createSubject, getSubjects, updateSubject, removeSubject } from '../../functions/subject';
import {getSubSubjects} from '../../functions/subSubject';
import SubjectsList from '../../components/forms/Subjects/SubjectsList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SubjectCreateForm from '../../components/forms/Subjects/SubjectsCreateForm';
import SubjectUpdateForm from "../../components/forms/Subjects/SubjectsUpdateForm";



const SubjectsCreate = () => {
    const initialState = {
        name: "",
        code: "",
        subs:[]
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [subs, setSubs] = useState([]);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
        createSubject(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)

                setTimeout(() => {

                    setShow(false);
                    loadSubjects();
                    return
                }

                    , 1000);
            })
            .catch(err => {
                console.log("create Subject catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateSubject(values, user.token)
            .then(res => {
                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadSubjects();
                    return
                }, 1000);
            })
            .catch((err) => console.log("Update Subject catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        console.log("load subject executes from useEffect");
        loadSubjects();
        loadSubs();
    }, []);

    const loadSubjects = () => {
        getSubjects()
            .then((t) => {
                setSubjects(t.data);
            }
            )
            .catch((err)=> console.log("ERR SUBJECTS===> ", err))
    }

    const loadSubs = () => {
        getSubSubjects()
            .then((s) => {
                setSubs(s.data);
            })
            .catch((err)=> console.log("ERR SUBS===> ", err))
            
    }
    const addSubject = () => {
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
            removeSubject(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadSubjects();
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
                        <i className="fas fa-book-open fa-2x"></i>
                        <span className='h4'> Subjects </span>
                    </>)}

                    {<SubjectsList subjects={subjects} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} />}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addSubject} hidden={showUpdate} >Add Subject</button>
                        {show ? (<SubjectCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} subs = {subs}
                                                         handleSubChange={handleSubChange} />) : ""}
                        {showUpdate ? <SubjectUpdateForm values={values} 
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

export default SubjectsCreate;