import React from 'react';
import { BsCheck} from "react-icons/bs";
import {HiUserAdd} from "react-icons/hi";
const TeachersList = ({ teachers , handleEditClick, handleUpdateSubmit, handleDelete,addUser}) => { 
    return (
        <div>
            <table className='table table-outline' onSubmit = {handleUpdateSubmit}>
                <thead className='thead'>
                    <tr>
                        <th scope="col">Account</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((t) => <tr key={t._id}>
                        {t.hasAccount?(<td className='text-primary text-center'>< BsCheck/> </td>) :( <td> <a className='iconsize' onClick={() => addUser(t)}><HiUserAdd/></a></td>)} 

                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td> <a className='text-primary fa fa-edit' onClick={()=> handleEditClick(t)} /></td>
                        <td> <a className='text-danger fas fa-trash' onClick={()=> handleDelete(t._id)} /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default TeachersList;