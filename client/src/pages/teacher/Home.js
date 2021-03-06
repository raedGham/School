import React, { useState, useEffect } from 'react';
import { getDefYr } from '../../functions/schoolYear';
import { getTeacher, getCoursesTaught } from '../../functions/teacher';
import { createGrade, sectionGrades } from '../../functions/grades';
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
        (teacher && defYrId && getCoursesTaught(teacherId, defYrId).then((res) => {

            setTeacherCourses(res.data)
        }))

    }
    useEffect(() => loadDefYr(), [defYr]);
    useEffect(() => loadTeacher(), []);
    useEffect(() => loadCourses(teacher._id, defYr), [teacher, defYr]);

    const handleCourseClick = (c) => {
        let sectiongrades = [];
        gradesTemp = [];
        console.log("clicked", c);
        setCurrentCourse(c.course);
        setCurrentSection(c.section);
        sectionGrades(c.course._id,defYr, c.section._id, user.token).then((res)=> {
            console.log("sectionGrades");
            console.log(res.data);
            sectiongrades = res.data;

            getSectionStudents(defYr1, c.section).then((res1) => {
                // console.log(res1.data);
                // console.log(gradesTemp);
                const temp = res1.data.students;
                temp.map((s) => {
              var found = sectiongrades.find((st)=> {
                 return st.student === s._id;
              });
      
            //  console.log("found",found);
            if (!found) {
                
                gradesTemp.push({
                    studentName: s.name,
                    student: s._id,
                    course: c.course._id,
                    schoolYear: defYr,
                    section: c.section._id,
                    grade1: 0,
                    grade2: 0,
                    grade3: 0,
                    grade4: 0,
                    teacher: teacher._id
                })
            }
            else {
                gradesTemp.push({...found,   studentName: s.name})
            }
    
            });
    

        })
        

    
        console.log(gradesTemp);
            setGrades(gradesTemp)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submit", grades);
        createGrade(grades, user.token).then(() => console.log("grades added sucessfully"))

    }

    const sectiongrades = () => {
        const schoolyear = defYr1.description;
        const course = currentCourse.name;
        const section = currentSection.name
        return (

            <form onSubmit={handleSubmit}>
                <h4>Schoolyear: <span className='text-primary'>{schoolyear} </span></h4>
                <h5>course:<span className='text-danger'>{course} </span>  section:<span className='text-danger'>{section}</span> </h5>
                <table className='table'>

                    <thead>
                        <tr>
                            <th scope="col">Student</th>
                            <th scope="col">Term1</th>
                            <th scope="col">Term2</th>
                            <th scope="col">Term3</th>
                            <th scope="col">Term4</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* {JSON.stringify(grades,undefined,2)} */}
                        {grades.map((s, index) => (<SectionGrades s={s} index={index} grades={grades} setGrades={setGrades} />))}

                    </tbody>

                </table>
                <button type="submit" className='btn btn-outline-primary' >Submit</button>
            </form>
        )
    }

    return (

        <div className='row'>
            {console.log("Rendered")}
            <div className='col-md-4'>
                <TeacherCard teacher={teacher} />
                {teacherCourses.coursesTaught && <TeacherCourses coursesTaught={teacherCourses.coursesTaught} handleCourseClick={(c) => handleCourseClick(c)} />}

            </div>
            <div className='col-md-7'>
                {sectiongrades()}
            </div>
        </div>
    );
};

export default Home;