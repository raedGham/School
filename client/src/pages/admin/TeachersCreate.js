import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createTeacher, getTeachers } from '../../functions/teacher';
import TeachersList from '../../components/forms/TeachersList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import TeacherCreateForm from '../../components/forms/TeacherCreateForm';



const TeachersCreate = () => {
    const initialState = {
        name: "",
        email: "",
        address: "",
        mobile: undefined,
        birthDate: "",
        startDate: "",
        degree: ""

    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => loadTeachers(), []);

    const loadTeachers = () => {
        getTeachers()
            .then((t) => {
                setTeachers(t.data);
            }
            )
    }

    const addTeacher = () => setShow(true)


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">  <AdminNav /></div>

                <div className="col-md-3 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : <h4>Teachers</h4>}
                    {<TeachersList teachers={teachers} />}
                </div>

                <div className="col-md-7 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary' onClick={addTeacher}>Add Teacher</button>
                        {show ? (<TeacherCreateForm values={values} setValues={setValues} />) : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default TeachersCreate;