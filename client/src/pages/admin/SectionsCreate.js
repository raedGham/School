import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createSection, getSections, updateSection, removeSection } from '../../functions/section';
import SectionsList from '../../components/forms/Sections/SectionsList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SectionCreateForm from '../../components/forms/Sections/SectionCreateForm';
import SectionUpdateForm from "../../components/forms/Sections/SectionUpdateForm";
import {FaBuromobelexperte} from  "react-icons/fa";


const SectionsCreate = () => {
    const initialState = {
        name: "",
        code: "",
    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
        createSection(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)

                setTimeout(() => {

                    setShow(false);
                    loadSections();
                    return
                }

                    , 1000);
            })
            .catch(err => {
                console.log("create Section catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateSection(values, user.token)
            .then(res => {
                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadSections();
                    return
                }, 1000);
            })
            .catch((err) => console.log("Update Section catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        console.log("load section executes from useEffect");
        loadSections()
    }, []);

    const loadSections = () => {
        getSections()
            .then((t) => {
                setSections(t.data);
            }
            )
    }

    const addSection = () => {
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
            removeSection(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadSections();
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
                        <FaBuromobelexperte className='iconLabelsize'/>  
                        <span className='h4'> Sections </span>
                    </>)}

                    {<SectionsList sections={sections} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} />}
                </div>
                {console.log("SHOW", show)}
                {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addSection} hidden={showUpdate} >Add Section</button>
                        {show ? (<SectionCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} />) : ""}
                        {showUpdate ? <SectionUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default SectionsCreate;