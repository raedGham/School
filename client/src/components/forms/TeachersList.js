import React from 'react';

const TeachersList = ({teachers}) => {
    return (
        <div>
 { teachers.map( (t)=> <div>  {t.name} - {t.email} </div> ) }
 
 </div>
    );
};

export default TeachersList;