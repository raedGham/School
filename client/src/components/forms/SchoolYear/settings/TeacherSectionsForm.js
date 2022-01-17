import React, { useState } from 'react';
import SectionsList from './sectionList';
import CoursesList from './courseList';
import ShowSelected from './ShowSelected';
const TeacherSectionsForm = ({ courses, sections, coursesTaught, handleTeacherScetionsSubmit }) => {

    const [showClassesList, setShowClassesList] = useState(false)
    const [showSelected, setShowSelected] = useState(false);
    const [course, setCourse] = useState("");


    const selectedSections = [];

    const handleCourseClick = (s) => {
        console.log(s);
        setCourse(s);
        if (showClassesList) setShowClassesList(false);
        setTimeout(() => setShowClassesList(true), 10)

    }

    const handleInputChange = (e) => {
        if (e.target.checked) {
            selectedSections.push(e.target.value);
        } else {
            let index = selectedSections.indexOf(e.target.value);
            selectedSections.splice(index, 1);
        }
        console.log(selectedSections);



    }
    const handleInputSubmit = () => {


        selectedSections.map((s) => {

            coursesTaught.push({ course: course.name, section: s })
        })

        console.log(coursesTaught);


        if (showSelected) setShowSelected(false);
        setTimeout(() => setShowSelected(true), 10)
    }

    const handleRemove = (i) => {
        coursesTaught.splice(i, 1);
        if (showSelected) setShowSelected(false);
        setTimeout(() => setShowSelected(true), 10)

    }

    return (
        <div class="row">

            <div className='col-md-3'>
                <CoursesList courses={courses} handleCourseClick={(s) => handleCourseClick(s)} />

            </div>
            <div className='col-md-3'>
                {showClassesList && <SectionsList course={course} sections={sections} handleInputChange={(s) => handleInputChange(s)} handleInputSubmit={handleInputSubmit} />}
            </div>
            <div className='col-md-4'>
                {showSelected && <ShowSelected coursesTaught={coursesTaught} handleRemove={(i) => handleRemove(i)} />}

                {showSelected && <button className='btn btn-primary w-100 mt-3 btn-sm'>Submit</button>}

            </div>






        </div>
    );
};

export default TeacherSectionsForm;