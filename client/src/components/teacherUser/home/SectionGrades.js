import React from 'react';

const SectionGrades = ({grades}) => {
    return (
        {JSON.stringify(grades)}
        <div className='list-group' >
            
         {grades.students && grades.students.map((s)=> <li className='list-group-item'> {s.name}</li>)}
        
        </div>
    );
};

export default SectionGrades;