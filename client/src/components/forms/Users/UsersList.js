import React from 'react';


const UsersList = ({ users, handleEditClick, handleUpdateSubmit, handleDelete, changePassword }) => {
    return (
        <div>
            <table className='table table-outline' onSubmit={handleUpdateSubmit}>
                <thead className='thead'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((t) => <tr key={t._id}>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td>{t.role}</td>
                        <td> <a className='text-primary fa fa-edit pointer' onClick={() => handleEditClick(t)} /></td>
                        <td> <a className='text-danger fas fa-trash pointer' onClick={() => handleDelete(t._id)} /></td>
                        <td> <a className='text-warning fa fa-key pointer' onClick={() => changePassword(t)} /> </td>
                    </tr>)}
                </tbody>
            </table>


        </div >
    );
};

export default UsersList;