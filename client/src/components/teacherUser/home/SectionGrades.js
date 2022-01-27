import React from 'react';

const SectionGrades = ({grades}) => {
    return (
       
        <div className='list-group' >
            
         {grades.students && grades.students.map((s)=> <li className='list-group-item'> {s.name}</li>)}
        
        </div>
    );
};

export default SectionGrades;