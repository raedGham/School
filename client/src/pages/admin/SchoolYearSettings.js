import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../../components/nav/AdminNav';
import { useSelector } from 'react-redux';
import { getYear } from '../../functions/schoolYear';
import { AiFillSetting } from 'react-icons/ai';
import { getTeachers } from '../../functions/teacher';
import { getSections } from '../../functions/section';
import { getCourses } from '../../functions/course';
import TList from '../../components/forms/SchoolYear/settings/TList';
import TeacherSectionsForm from '../../components/forms/SchoolYear/settings/TeacherSectionsForm';


const SchoolYearSettings = () => {

    const { id } = useParams();
    const [schoolYear, setSchoolYear] = useState({});
    const [teachers, setTeachers] = useState([]);
    const [teacherform, setTeacherform] = useState(false);
    const [teacherSelected, setTeacherSelected] = useState(false);
    const [teacher, setTeacher] = useState({})
    const [sections, setSections] = useState([]);
    const [courses, setCourses] = useState([]);
    const [coursesTaught, SetCoursesTaught] = useState([]);

    const [studentform, setStudentform] = useState(false);

    const { user } = useSelector(state => ({ ...state }));

    const loadTeachers = () => {
        getTeachers()
            .then((t) => {
                setTeachers(t.data);
            });
    }

    const loadSections = () => {
        getSections()
            .then((s) => {
                setSections(s.data);
            });
    }

    const loadCourses = () => {
        getCourses()
            .then((c) => {
                setCourses(c.data);
            });
    }

    useEffect(() => {
        getYear(id, user.token)
            .then((u) => {
                setSchoolYear(u.data);
            }
            )

    }, []);

    useEffect(() => loadTeachers(), []);
    useEffect(() => loadSections(), []);
    useEffect(() => loadCourses(), []);

    const handleSelectTeacher = (t) => {
        setTeacher(t);
        setTeacherSelected(true);

    }

    const handleTeacherScetionsSubmit = () => {
        //
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-10 text-left">

                    <h5> <AiFillSetting /> School Year  {schoolYear.name}  Settings</h5>


                    <button className='btn btn-primary btn-sm'
                        onClick={() => {
                            if (studentform) setStudentform(false);
                            setTeacherform(true)
                        }}

                    > Teachers Courses and Classes </button>

                    <button className='btn btn-primary btn-sm m-3'

                        onClick={() => {
                            if (teacherform) setTeacherform(false);
                            setStudentform(true)
                        }}

                    >Students  Classes/Sections </button>

                    <div className="row">
                        <div className="col-md-3">
                            {teacherform && <TList teachers={teachers} handleSelectTeacher={(t) => handleSelectTeacher(t)} />}
                            {studentform && <p> classes sections List goes here </p>}
                        </div>

                        <div className="col-md-5">
                            {teacherform && teacherSelected && (<>
                                <h5> Teacher Name: <span className="text-danger">{teacher.name}</span> </h5>
                                <TeacherSectionsForm
                                    sections={sections}
                                    courses={courses}
                                    coursesTaught={coursesTaught}
                                    handleTeacherScetionsSubmit={handleTeacherScetionsSubmit} />
                            </>)}
                            {studentform && <p> students list goes here </p>}
                        </div>
                    </div>
                </div>




            </div>

        </div>


    );
};

export default SchoolYearSettings;