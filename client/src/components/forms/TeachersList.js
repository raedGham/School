import React from 'react';

const TeachersList = ({ teachers }) => {
    return (
        <div>
            <table className='table table-outline'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>

                </thead>
                <tbody>
                    {teachers.map((t) => <tr>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td> <i className='text-primary fa fa-edit' /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default TeachersList;