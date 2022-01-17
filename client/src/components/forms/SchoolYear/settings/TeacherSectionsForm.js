import React, {useState} from 'react';
import SectionsList from './sectionList';
import CoursesList from './courseList';

const TeacherSectionsForm = ({ courses, sections, coursesTaught, handleTeacherScetionsSubmit }) => {
 
 const [showClassesList, setShowClassesList] = useState(false)
 const [section, setSection] = useState("");
 

 const handleSectionClick = (s) => {
    
        setSection(s);
        setShowClassesList(true)    
   }
 
   const handleInputChange = (e) => {
       if ( e.target.checked ) {

       }
    console.log(e.target.checked, "" , e.target.value);
   }
 

    return (
        <div class = "row">
           
            <div className='col-md-3'>
            <SectionsList sections={sections}  handleSectionClick ={(s) => handleSectionClick(s)}/>
            </div>
            <div className='col-md-3'>
            {showClassesList  && <CoursesList section= {section.name} courses={courses} handleInputChange={handleInputChange}/>}
            </div>
        </div>
    );
};

export default TeacherSectionsForm;