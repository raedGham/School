import React from 'react';

const SubSubjectsList = ({ subSubjects, handleEditClick, handleUpdateSubmit, handleDelete }) => {
    return (
        <div>
            <table className='table table-outline' onSubmit={handleUpdateSubmit}>
                <thead className='thead'>
                    <tr>
                        <th scope="col">Sub Subject Name</th>
                        <th scope="col">Code</th>
                    </tr>
                </thead>
                <tbody>
                    {subSubjects.map((t) => <tr key={t._id}>
                        <td>{t.name}</td>
                        <td>{t.code}</td>
                        <td> <a className='text-primary fa fa-edit' onClick={() => handleEditClick(t)} /></td>
                        <td> <a className='text-danger fas fa-trash' onClick={() => handleDelete(t._id)} /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default SubSubjectsList;