import React, {useState} from 'react';
import SectionsList from './sectionList';
import CoursesList from './courseList';
import ShowSelected from './ShowSelected';
const TeacherSectionsForm = ({ courses, sections, coursesTaught, handleTeacherScetionsSubmit }) => {
 
 const [showClassesList, setShowClassesList] = useState(false)
 const [showSelected, setShowSelected] = useState(false);
 const [section, setSection] = useState("");
 

 const selectedCourses = [];

 const handleSectionClick = (s) => {
    
        setSection(s);
        if (showClassesList) setShowClassesList(false);
        setTimeout(() => setShowClassesList(true) , 10)
        
   }
 
   const handleInputChange = (e) => {
       if ( e.target.checked ) {
           selectedCourses.push(e.target.value);
       } else {
           let index = selectedCourses.indexOf(e.target.value);
           selectedCourses.splice(index,1);
       }
       console.log(selectedCourses);
       setShowSelected(true);
      

   }
   const handleInputSubmit = () => {
     
       
       selectedCourses.map((c) => {
           
           coursesTaught.push({section:section.name, course:c})
       } )

       console.log(coursesTaught);
      
   }

    return (
        <div class = "row">
           
            <div className='col-md-3'>
            <SectionsList sections={sections}  handleSectionClick ={(s) => handleSectionClick(s)}/>
            </div>
            <div className='col-md-3'>
            {showClassesList  && <CoursesList section= {section.name} courses={courses} handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit}/>}
            </div>
            <div className='col-md-3'>
            {showSelected && <ShowSelected  coursesTaught={coursesTaught}/>}
            </div>

        

        </div>
    );
};

export default TeacherSectionsForm;