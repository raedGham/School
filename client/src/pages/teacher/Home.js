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
    const [currentCourse, setCurrentCourse] = useState({});
    const [currentSection, setCurrentSection] = useState({});
    let gradesTemp = [];
    const loadDefYr = () => {
       
            getDefYr().then((res) => {

                setDefYr(res.data[0]._id);
               setDefYr1(res.data[0]);

                 console.log("defYr--->", defYr);

            })


    }

    const loadTeacher = () => {
        (user && getTeacher(user.email).then((res) => {
            setTeacher(res.data[0]);
            console.log("teacher from get teacher", teacher.name);
        }))
    }

    const loadCourses = (teacherId, defYrId) => {
   
            console.log("load courses , teacherId--->", teacherId);
            console.log("load courses , defYrId--->", defYrId);
            (teacher &&  defYrId && getCoursesTaught(teacherId, defYrId).then((res) => {                
                
                setTeacherCourses(res.data)
            }))
   
        
       
    }
    useEffect(() => loadDefYr(), [defYr]);
    useEffect(() => loadTeacher(), []);
    useEffect(() => loadCourses(teacher._id, defYr), [teacher, defYr]);

    const handleCourseClick = (c) => {
        gradesTemp = [];
        console.log("clicked", c);
        setCurrentCourse(c.course);
        setCurrentSection(c.section);
        // console.log("defYr", defYr)
        getSectionStudents(defYr1, c.section).then((res) => {
            console.log(res.data);
            console.log(gradesTemp);
            const temp = res.data.students;
            temp.map((s) => gradesTemp.push({
                studentName: s.name,
                student: s._id,
                course: c.course._id,
                schoolyear: defYr,
                section: c.section._id,
                grade1: 0,
                grade2: 0,
                grade3: 0,
                grade4: 0,
                teacher: teacher._id
            }));
            console.log(gradesTemp);
            setGrades(gradesTemp)
        })

    }


    return (

        <div className='row'>
            {console.log("Rendered")}
            <div className='col-md-4'>
                <TeacherCard teacher={teacher} />
                {teacherCourses.coursesTaught && <TeacherCourses coursesTaught={teacherCourses.coursesTaught} handleCourseClick={(c) => handleCourseClick(c)} />}

            </div>
            <div className='col-md-7'>

                <SectionGrades grades={grades} schoolyear={defYr1.description} course={currentCourse.name} section={currentSection.name} />
            </div>
        </div>
    );
};

export default Home;