import React from 'react';

const SectionsList = ({sections, handleSectionClick }) => {
    return (
        <div className='list-group'>
           
        {    sections.map((s) => (
             <a className='list-group-item' key = {s._id} onClick={()=>handleSectionClick(s)} > {s.name}</a>
        )) }
         </div>
    );
};

export default SectionsList;