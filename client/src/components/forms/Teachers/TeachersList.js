import React from 'react';
import { BsCheck } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
const TeachersList = ({ teachers, handleEditClick, handleUpdateSubmit, handleDelete, addUser }) => {
    return (
        <div>
            <table className='table table-outline' onSubmit={handleUpdateSubmit}>
                <thead className='thead'>
                    <tr>
                        <th scope="col">Account</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((t) => <tr key={t._id}>
                        {t.hasAccount ? (<td className='text-primary'>< BsCheck /> </td>) : (<td> <a className='iconsize' onClick={() => addUser(t)}><HiUserAdd /></a></td>)}

                        <td className='bold'>{t.name} <h6 className='spanf'>{t.email}</h6></td>

                        <td> <a className='text-primary fa fa-edit pointer' onClick={() => handleEditClick(t)} /></td>
                        <td> <a className='text-danger fas fa-trash pointer' onClick={() => handleDelete(t._id)} /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default TeachersList;