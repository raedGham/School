import React from 'react';

const TeacherSectionsForm = ({ courses, sections, coursesTaught, handleTeacherScetionsSubmit }) => {
    return (
        <div>
            TeacherSectionsForm

            {JSON.stringify(sections)}
            {JSON.stringify(courses)}
        </div>
    );
};

export default TeacherSectionsForm;