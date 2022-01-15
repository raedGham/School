import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../../components/nav/AdminNav';
import { useSelector } from 'react-redux';
import { getYear } from '../../functions/schoolYear';
import { AiFillSetting } from 'react-icons/ai';

const SchoolYearSettings = () => {

    const { id } = useParams();
    const [schoolYear, setSchoolYear] = useState({});

    const { user } = useSelector(state => ({ ...state }));

    useEffect(() => {
        getYear(id, user.token)
            .then((u) => {
                setSchoolYear(u.data);
            }
            )

    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-10 text-left">

                    <h5> <AiFillSetting /> School Year  {schoolYear.name}  Settings</h5>


                    <button className='btn btn-primary btn-sm'> Teachers Courses and Classes </button>

                    <button className='btn btn-primary btn-sm m-3' >Students  Classes/Sections </button>
                    <div className="row">
                        <div className="col-md-5">
                            List here
                        </div>

                        <div className="col-md-3">
                            form here
                        </div>
                    </div>
                </div>




            </div>

        </div>


    );
};

export default SchoolYearSettings;