import React from 'react';

const SectionGrades = ({grades}) => {
    return (
        <div className='list-group' >
            
         {grades.students.map((s)=> <li className='list-group-item'> {s.name}</li>)}
         {/* {JSON.stringify(grades.students)} */}
        </div>
    );
};

export default SectionGrades;