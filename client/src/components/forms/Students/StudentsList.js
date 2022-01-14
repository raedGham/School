import React from 'react';

const TeachersList = ({ students, handleEditClick, handleUpdateSubmit, handleDelete }) => {
    return (
        <div>
            <table className='table table-outline' onSubmit={handleUpdateSubmit}>
                <thead className='thead'>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((t) => <tr key={t._id}>
                        <td>{t.code}</td>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td> <a className='text-primary fa fa-edit pointer' onClick={() => handleEditClick(t)} /></td>
                        <td> <a className='text-danger fas fa-trash pointer' onClick={() => handleDelete(t._id)} /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default TeachersList;