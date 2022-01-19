import React from 'react';

const StudentsList = ({ section, students, handleStudentClick, handleStudentSubmit }) => {
    return (<>
        <h6>Section: <span className='text-danger'>{section.name}</span></h6>
        <div className='list-group  scroll'>

            {students.map((s) => (
                <li className='list-group-item' key={s._id}  > <input className="form-check-input me-1" type="checkbox" value={JSON.stringify(s)} onChange={handleStudentClick} />{s.name}</li>
            ))}
        </div>
        <button className='btn btn-primary btn-sm w-100 mt-2' onClick={handleStudentSubmit}>Add</button>
    </>
    );
};

export default StudentsList;