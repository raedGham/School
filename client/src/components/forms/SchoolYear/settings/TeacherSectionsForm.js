import React, { useEffect, useState } from 'react';
import SectionsList from './sectionList';
import CoursesList from './courseList';
import ShowSelected from './ShowSelected';
const TeacherSectionsForm = ({ teacher, courses, sections, coursesTaught, setCoursesTaught, handleTeacherScetionsSubmit,
                               showSelected, setShowSelected, showClassesList, setShowClassesList }) => {

    
    const [course, setCourse] = useState("");


    const selectedSections = [];
    let coursesTaught1 =  coursesTaught ? coursesTaught : [];

    const handleCourseClick = (s) => {
        console.log(s);
        setCourse(s);

         if (showClassesList) setShowClassesList(false);
         
           setTimeout(() => setShowClassesList(true), 10)
     
        

    }

    const handleInputChange = (e) => {
        console.log("Value:",JSON.parse(e.target.value));
        if (e.target.checked) {
            selectedSections.push(JSON.parse(e.target.value));
        } else {
            let index = selectedSections.indexOf(e.target.value._id);
            selectedSections.splice(index, 1);
        }
        console.log(selectedSections);



    }
    const handleInputSubmit = () => {

        console.log(coursesTaught1);
        selectedSections.map((s) => {

        coursesTaught1.push({ course: course, section: s })
        })

        setCoursesTaught(coursesTaught1);
        

        
        if (showSelected) setShowSelected(false);
        setTimeout(() => setShowSelected(true), 10)
    }

    const handleRemove = (i) => {
        console.log("coursesTaught",coursesTaught );
        coursesTaught1 = coursesTaught;
        coursesTaught1.splice(i, 1);
        setCoursesTaught(coursesTaught1);
        if (showSelected) setShowSelected(false);
        setTimeout(() => setShowSelected(true), 10)

    }

useEffect(()=> {
    console.log("showSelected",showSelected);
    console.log("showClassesList",showClassesList);

    if ( showSelected ) setShowSelected(false);   
    if ( showClassesList ) setShowClassesList(false);
},[teacher])

    return (
        <div className="row">       
          {/* {console.log(coursesTaught)} */}
            <div className='col-md-3'>
                <CoursesList courses={courses} handleCourseClick={(s) => handleCourseClick(s)} />
            </div>
            <div className='col-md-3'>
                {showClassesList && <SectionsList course={course} sections={sections} handleInputChange={(s) => handleInputChange(s)} handleInputSubmit={handleInputSubmit} />}
            </div>
            <div className='col-md-4'>
                {coursesTaught.length>0 && <ShowSelected coursesTaught={coursesTaught} handleRemove={(i) => handleRemove(i)} />}

                {showSelected && coursesTaught.length>0 && <button className='btn btn-primary w-100 mt-3 btn-sm' onClick={handleTeacherScetionsSubmit} >Submit</button>}

            </div>






        </div>
    );
};

export default TeacherSectionsForm;