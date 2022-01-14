import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createYear, getYears, updateYear, removeYear } from '../../functions/schoolYear';
// import { auth } from '../../firebase';
import YearsList from '../../components/forms/SchoolYear/YearsList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { FaCalendar } from "react-icons/fa";
import YearCreateForm from '../../components/forms/SchoolYear/YearCreateForm';
import YearUpdateForm from "../../components/forms/SchoolYear/YearUpdateForm";

import Search from '../../components/search/search';


const YearsCreate = () => {
    const initialState = {
        name: "",
        Description: "",

    }
    const [values, setValues] = useState(initialState);
    const { user } = useSelector(state => ({ ...state }));

    const [years, setYears] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [textSearch, setTextSearch] = useState("");

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        createYear(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`);
                setTimeout(() => {
                    setShow(false);
                    loadYears();
                }, 500);
            })
            .catch(err => {
                console.log("create Year catch err", err.response)
                //if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateYear(values, user.token)
            .then(res => {
                console.log("UPDATED")

                toast.success(` Updated Sucessfully`)
                setTimeout(() => {
                    setShowUpdate(false);
                    loadYears();
                    return
                }, 500);
            })
            .catch((err) => console.log("Update Year catch err", err))

    };


    const handleChange = (e) => {
        console.log("HANDLE CHANGE");
        console.log(e.target.value);

        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(() => loadYears(), []);

    const loadYears = () => {
        if (show) setShow(false);
        if (showUpdate) setShowUpdate(false);
        getYears()
            .then((u) => {
                setYears(u.data);
            }
            )
    }

    const addYear = () => {
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
            removeYear(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setTimeout(() => {
                        loadYears()
                        return;
                    }, 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }


    const handleSearchChange = (e) => {
        setTextSearch(e.target.value);
        if (textSearch !== "") {
            const filteredYears = years.filter((u) => {
                return Object.values(u).join(" ").toLowerCase().includes(textSearch.toLowerCase());
            });
            setSearchResults(filteredYears);
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <FaCalendar className='iconLabelsize' />
                        <span className='h4'> School Years </span>
                    </>)}
                    <Search textSearch={textSearch} handleSearchChange={handleSearchChange} />
                    {<YearsList users={textSearch.length < 1 ? years : searchResults}
                        handleEditClick={(t) => handleEditClick(t)}
                        handleDelete={(t) => handleDelete(t)}
                    />}
                </div>

                <div className="col-md-5 text-left m-2">

                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addYear} hidden={showUpdate} >Add School Year</button>
                        {show ? (<YearCreateForm
                            values={values}
                            setValues={setValues}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}

                        />) : ""}
                        {showUpdate ? <YearUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}

                </div>

            </div>
        </div>
    );
};

export default YearsCreate;