import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createClass, getClasses, updateClass, removeClass } from '../../functions/class';
import { getSections } from '../../functions/section';
import ClassesList from '../../components/forms/Classes/ClassesList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import ClassCreateForm from '../../components/forms/Classes/ClassCreateForm';
import ClassUpdateForm from "../../components/forms/Classes/ClassUpdateForm";
import {FaChalkboard} from "react-icons/fa";


const ClassesCreate = () => {
    const initialState = {
        name: "",
        code: "",
        level: "",
        sections: []
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Values --->", values);
        createClass(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)

                setTimeout(() => {

                    setShow(false);
                    loadClasses();
                    return
                }

                    , 1000);
            })
            .catch(err => {
                console.log("create Class catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateClass(values, user.token)
            .then(res => {
                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadClasses();
                    return
                }, 1000);
            })
            .catch((err) => console.log("Update Class catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        console.log("load subject executes from useEffect");
        loadClasses();
        loadSections();
    }, []);

    const loadClasses = () => {
        getClasses()
            .then((t) => {
                setClasses(t.data);
            }
            )
    }

    const loadSections = () => {
        getSections()
            .then((s) => {
                console.log("sections",sections);
                setSections(s.data);
            }
            )
    }
    const addClass = () => {
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
            removeClass(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadClasses();
                        return
                    }, 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }

    const handleSectionChange = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        //console.log("value---->", value)
        setValues({ ...values, sections: value })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                     
                        < FaChalkboard className='iconLabelsize'/>  
                        <span className='h4'> Classes </span>
                    </>)}

                    {<ClassesList classes={classes} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} />}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addClass} hidden={showUpdate} >Add Class</button>
                        {show ? (<ClassCreateForm
                            values={values}
                            setValues={setValues}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            sections={sections}
                            handleSectionChange={handleSectionChange} />) : ""}

                        {showUpdate ? <ClassUpdateForm 
                                                    values={values} 
                                                    setValues={setValues} 
                                                    handleChange={handleChange} 
                                                    handleUpdateSubmit={handleUpdateSubmit} 
                                                    sections={sections}
                                                    handleSectionChange={handleSectionChange}
                                                    /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default ClassesCreate;