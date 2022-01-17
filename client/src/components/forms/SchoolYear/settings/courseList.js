import React from 'react';

const CoursesList = ({courses , section, handleInputChange, handleInputSubmit}) => {
    
    return (<>
        <h6 className='text-primary'> {section} </h6>
        <ul className='list-group'>
           
        {    courses.map((c, i) => (
             <li className='list-group-item' key = {c._id}  > <input className="form-check-input me-1" type = "checkbox" value={c.name}  onChange={handleInputChange} />{c.name}</li>
        )) }
         </ul>
         <button className='btn btn-primary mt-2' onClick={handleInputSubmit}>Add</button>
         </>
    );
};

export default CoursesList;