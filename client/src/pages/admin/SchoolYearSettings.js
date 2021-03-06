import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../../components/nav/AdminNav';
import { useSelector } from 'react-redux';
import { getYear } from '../../functions/schoolYear';
import { AiFillSetting } from 'react-icons/ai';
import { getTeachers , addOrUpdateCourses, getCoursesTaught} from '../../functions/teacher';
import { getSections, getSectionStudents , addOrUpdateSecStudents} from '../../functions/section';
import { getCourses } from '../../functions/course';
import { getStudents } from '../../functions/student';
import TList from '../../components/forms/SchoolYear/settings/teachers/TList';
import TeacherSectionsForm from '../../components/forms/SchoolYear/settings/teachers/TeacherSectionsForm';

import SList from '../../components/forms/SchoolYear/settings/students/SList';
import SectionsStudentsForm from '../../components/forms/SchoolYear/settings/students/SectionsStudentsForm';

const SchoolYearSettings = () => {

    const { id } = useParams();
    const [schoolYear, setSchoolYear] = useState({});
    const [teachers, setTeachers] = useState([]);
    const [teacherform, setTeacherform] = useState(false);
    const [teacherSelected, setTeacherSelected] = useState(false);
    const [teacher, setTeacher] = useState({})
    const [sections, setSections] = useState([]);
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [coursesTaught, setCoursesTaught] = useState([]);

    const [studentform, setStudentform] = useState(false);

    const { user } = useSelector(state => ({ ...state }));

     const [showClassesList, setShowClassesList] = useState(false)
     const [showSelected, setShowSelected] = useState(false);


     const [section, setSection] = useState({});
     const [sectionSelected, setSectionSelected] = useState(false);
     const [sectionStudents, setSectionStudents] = useState([]);
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

    const loadTeacherCourses = (t) => {
       console.log("LOAD teacher courses", schoolYear._id, t._id);
        getCoursesTaught( t._id, schoolYear._id)
            .then((c) => {
                console.log("Teacher Courses:", c.data);
              const cr = (c.data  && c.data.coursesTaught )? c.data.coursesTaught : ""
                setCoursesTaught(cr);
                
            });
    }

    const loadStudents = () => {
        getStudents()
            .then((c) => {
                setStudents(c.data);
            });
    }

    useEffect(() => {
        getYear(id, user.token)
            .then((u) => setSchoolYear(u.data))

    }, []);

    useEffect(() => loadTeachers(), []);
    useEffect(() => loadSections(), []);
    useEffect(() => loadCourses(), []);
    useEffect(() => loadStudents(), []);

    const handleSelectTeacher = (t) => {
        setTeacher(t);
        setTeacherSelected(true);
        loadTeacherCourses(t)

    }

    const handleTeacherScetionsSubmit = () => {
        // console.log("schoolYear",schoolYear);
        // console.log("teacher",teacher);
        // console.log("coursesTaught",coursesTaught);
  let ct = [];
     coursesTaught.map((i) => {
         ct.push({course:i.course._id, section: i.section._id })
     })


        const YrTeacherCourses = {
            schoolyear: schoolYear._id,
            teacher   : teacher._id,
            coursesTaught: ct

        }

        console.log("YrTeacherCourses",YrTeacherCourses );
        addOrUpdateCourses(YrTeacherCourses, user.token)
          .then(console.log("courses added"));
        
    }

//   sections students part goes here

const handleSelectSection = (s) => {
    setSection(s);
    setSectionSelected(true);
    loadSectionStudents(s)
}

const loadSectionStudents = (s) => {
    getSectionStudents(schoolYear, s)
        .then((c) => {
            console.log(c.data);
          const cr = (c.data  && c.data.students )? c.data.students : ""
            setSectionStudents(cr);
            
        });

        console.log(sectionStudents)
}


const handleSectionStudentsSubmit = (s) => {

        const YrStudentsSections = {
           schoolyear: schoolYear._id,
           section   : section._id,
           students   :sectionStudents

       }

       console.log("YrStudentsSections",YrStudentsSections );
       addOrUpdateSecStudents(YrStudentsSections, user.token)
         .then(console.log("section students added"));
       

}

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">  <AdminNav /></div>

                <div className="col-md-10 text-left">

                    <h5> <AiFillSetting /> School Year:<span className='text-danger bold'>{schoolYear.name} </span>  Settings</h5>


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
                            {studentform && <SList sections={sections} handleSelectSection={(s) => handleSelectSection(s)} />}
                        </div>

                        <div className="col-md-9">
                            {teacherform && teacherSelected && (<>
                                <h5> Teacher Name: <span className="text-danger">{teacher.name}</span> </h5>
                                <TeacherSectionsForm
                                    teacher={teacher}         
                                    sections={sections}
                                    courses={courses}
                                    coursesTaught={coursesTaught}
                                    setCoursesTaught={setCoursesTaught}
                                    handleTeacherScetionsSubmit={handleTeacherScetionsSubmit} 
                                    showSelected={showSelected}
                                    setShowSelected={setShowSelected}
                                    showClassesList={showClassesList}
                                    setShowClassesList={setShowClassesList}
                                    />
                            </>)}
                            {studentform && sectionSelected && <SectionsStudentsForm
                                              section ={section}
                                              students={students}
                                              sectionStudents ={sectionStudents}
                                              setSectionStudents ={setSectionStudents}
                                              handleSectionStudentsSubmit={handleSectionStudentsSubmit}
                                             
                                             /> }
                        </div> 
                    </div>
                </div>





            </div>

        </div>


    );
};

export default SchoolYearSettings;