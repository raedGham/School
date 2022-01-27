import React from 'react';


const StudentsList = ({ students, handleEditClick, handleUpdateSubmit, handleDelete }) => {
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
                    {students.map((t) => <>
                        <tr key={t._id} >
                            <td rowSpan="2">{t.code}</td>
                            <td className='bold'>{t.name} <h6 className='spanf'>{t.email}</h6></td>

                            <td rowspan="2"> <a className='text-primary fa fa-edit pointer vertalign' onClick={() => handleEditClick(t)} /></td>
                            <td rowspan="2"> <a className='text-danger fas fa-trash pointer vertalign' onClick={() => handleDelete(t._id)} /></td>
                        </tr>
                        <tr>

                        </tr>
                    </>
                    )}
                </tbody>
            </table>


        </div>
    );
};

export default StudentsList;