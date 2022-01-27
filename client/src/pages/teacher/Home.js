import React, { useState, useEffect } from 'react';
import { getDefYr } from '../../functions/schoolYear';
import { getTeacher, getCoursesTaught } from '../../functions/teacher';
import { getSectionStudents } from '../../functions/section';
import { useSelector, useDispatch } from 'react-redux';
import TeacherCourses from '../../components/teacherUser/home/teacherCourses';
import TeacherCard from '../../components/teacherUser/home/TeacherCard';
import SectionGrades from '../../components/teacherUser/home/SectionGrades';
const Home = () => {
    const [defYr, setDefYr] = useState("");
    const [defYr1, setDefYr1] = useState("");
    const dispatch = useDispatch();
    const { user } = useSelector(state => ({ ...state }));
    const [teacher, setTeacher] = useState({});
    const [teacherCourses, setTeacherCourses] = useState([]);
    const [grades, setGrades] = useState([]);

    const loadDefYr = () => {
        getDefYr().then((res) => {
            console.log(res.data[0]._id)
            setDefYr(res.data[0]._id);
            setDefYr1(res.data[0]);

        })
    }

    const loadTeacher = () => {
        (user && getTeacher(user.email).then((res) => {
            setTeacher(res.data[0]);
            console.log("teacher from get teacher", teacher);
        }))
    }

    const loadCourses = (teacherId, defYrId) => {
        console.log("teacherId--->", teacherId);
        console.log("defYrId--->", defYrId);
        (user && getCoursesTaught(teacherId, defYrId).then((res) => {
            console.log("teacher courses", res.data);
            setTeacherCourses(res.data)

        }))
    }
    useEffect(() => loadDefYr(), []);
    useEffect(() => loadTeacher(), []);
    useEffect(() => loadCourses(teacher._id, defYr), [teacher]);

const handleCourseClick = (c) => {
    console.log("clicked", c);
    console.log("defYr", defYr)
    getSectionStudents(defYr1, c.section).then((res)=>setGrades(res.data))
}


    return (

        <div className='row'>
            <div className='col-md-4'>
                <TeacherCard teacher={teacher} />
              {teacherCourses.coursesTaught && <TeacherCourses coursesTaught={teacherCourses.coursesTaught} handleCourseClick={(c) => handleCourseClick(c)} />}
              
            </div>
            <div className='col-md-7'>
                {/* {JSON.stringify(grades)} */}
            { grades.students ? (<SectionGrades grades={grades} />):""}
            </div>  
        </div>
    );
};

export default Home;