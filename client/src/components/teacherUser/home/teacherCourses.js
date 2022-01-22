import React from 'react';

const TeacherCourses = ({ teacherCourses }) => {
    return (
        <div>
            {/* {JSON.stringify(teacherCourses)} */}

            {teacherCourses ? teacherCourses.coursesTaught.map((c, i) => <a key={i} className='btn btn-outline-primary m-2'>{c.course.name} / {c.section.name} </a>) : "none"}

        </div>
    );
};

export default TeacherCourses;