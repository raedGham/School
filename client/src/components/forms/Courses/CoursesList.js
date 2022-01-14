import React from 'react';

const SubjectsList = ({ courses, handleEditClick, handleUpdateSubmit, handleDelete }) => {
    return (
        <div>
            <table className='table table-outline' onSubmit={handleUpdateSubmit}>
                <thead className='thead'>
                    <tr>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Code</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((t) => <>

                        <tr key={t._id}>
                            <td>{t.name}</td>
                            <td>{t.code}</td>
                            <td> <a className='text-primary fa fa-edit pointer' onClick={() => handleEditClick(t)} /></td>
                            <td> <a className='text-danger fas fa-trash pointer' onClick={() => handleDelete(t._id)} /></td>
                        </tr>
                        <tr>
                            {t.subs.map((s, i) => <td className='sectionsfont' key={i}> {s.code}/{s.name}| </td>)}
                        </tr>
                    </>
                    )}
                </tbody>
            </table>


        </div>
    );
};

export default SubjectsList;