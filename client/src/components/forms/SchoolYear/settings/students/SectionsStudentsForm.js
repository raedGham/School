import React, { useEffect, useState } from 'react';
import StudentsList from './studentList';
import ShowSelected from './ShowSelected';
const SectionsStudentsForm = ({ section, students, sectionStudents, setSectionStudents,  handleSectionStudentsSubmit,
                               }) => {

    const selectedStudents = [];
    let sectionStudents1 =  sectionStudents ? sectionStudents : [];
    const [showSelected , setShowSelected] = useState(false);

    const handleStudentClick = (e) => {
        //console.log("Value:",e.target.value);
        const val = JSON.parse(e.target.value)
        if (e.target.checked) {
            selectedStudents.push(val);
        } else {
        
            console.log(val._id);
            let index = selectedStudents.map((e)=> e._id).indexOf(val._id);
            console.log(index);
            selectedStudents.splice(index, 1);
        }
        console.log(selectedStudents);



    }
    const handleStudentSubmit = () => {
        console.log("selectedStudents", selectedStudents)
       
        selectedStudents.map((s) => {

        sectionStudents1.push(s)
        })

        setSectionStudents(sectionStudents1);
        

        
        if (showSelected) setShowSelected(false);
        setTimeout(() => setShowSelected(true), 10)
    }

    const handleRemove = (i) => {
        console.log("sectionStudents",sectionStudents );
        sectionStudents1 =  sectionStudents;
        sectionStudents1.splice(i, 1);
        setSectionStudents(sectionStudents1);
        if (showSelected) setShowSelected(false);
        setTimeout(() => setShowSelected(true), 10)

    }

useEffect(()=> {
    console.log("showSelected",showSelected);   

    if ( showSelected ) setShowSelected(false);   
},[section])

    return (
        <div className="row">       
          {/* {console.log(coursesTaught)} */}
            <div className='col-md-3'>
                <StudentsList section={section} students={students} handleStudentClick={(s) => handleStudentClick(s)} handleStudentSubmit={handleStudentSubmit} />
            </div>
            
            <div className='col-md-4'>
                {sectionStudents.length>0 && <ShowSelected sectionStudents={sectionStudents} handleRemove={(i) => handleRemove(i)} />}
                {showSelected && sectionStudents.length>0 && <button className='btn btn-primary w-100 mt-3 btn-sm' onClick={handleSectionStudentsSubmit} >Submit</button>}
            </div> 

        </div>
    );
};

export default SectionsStudentsForm;