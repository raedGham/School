import React from 'react';

const CoursesList = ({courses , section, handleInputChange}) => {
    console.log(section)
    return (<>
        <h6 className='text-primary'> {section} </h6>
        <ul className='list-group'>
           
        {    courses.map((c) => (
             <li className='list-group-item' key = {c._id}  > <input className="form-check-input me-1" type = "checkbox" value={c._id}  onChange={handleInputChange} />{c.name}</li>
        )) }
         </ul>
         </>
    );
};

export default CoursesList;