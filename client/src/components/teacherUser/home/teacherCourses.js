import React from 'react';

const TeacherCourses = ({ coursesTaught, handleCourseClick }) => {
    return (
        <div>
            {/* {JSON.stringify(teacherCourses)} */}

            {coursesTaught.map((c, i) => <a key={i} className='btn btn-outline-primary m-2' onClick={() => handleCourseClick(c)}>{c.course.name} / {c.section.name} </a>) }

        </div>
    );
};

export default TeacherCourses;