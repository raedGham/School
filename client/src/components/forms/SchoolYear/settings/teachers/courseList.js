import React from 'react';

const CoursesList = ({ courses, handleCourseClick }) => {

    return (<>
        <h5> Courses</h5>
        <ul className='list-group'>

            {courses.map((c, i) => (
                <a className='list-group-item' key={c._id} onClick={() => handleCourseClick(c)} > <span className='text-primary'> {c.code} </span> / {c.name}</a>
            ))}
        </ul>

    </>
    );
};

export default CoursesList;