import React from 'react';

const SectionsList = ({ course, sections, handleInputChange, handleInputSubmit }) => {
    return (<>
        <h6><span className='text-primary'>{course.code}</span> / {course.name}</h6>
        <div className='list-group'>

            {sections.map((s) => (
                <li className='list-group-item' key={s._id}  > <input className="form-check-input me-1" type="checkbox" value={JSON.stringify(s)} onChange={handleInputChange} />{s.name}</li>
            ))}
        </div>
        <button className='btn btn-primary btn-sm w-100 mt-2' onClick={handleInputSubmit}>Add</button>
    </>
    );
};

export default SectionsList;