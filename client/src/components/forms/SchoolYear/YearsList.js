import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const YearsList = ({ years, handleEditClick, handleUpdateSubmit, handleDelete }) => {
    return (
        <div>

            <table className='table table-outline' onSubmit={handleUpdateSubmit}>

                <thead className='thead'>

                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {years && years.map((t) => <>
                        <tr key={t._id} >

                            <td className='bold'>{t.name}</td>
                            <td >{t.description}</td>
                            <td > <a className='text-primary fa fa-edit pointer ' onClick={() => handleEditClick(t)} /></td>
                            <td> <a className='text-danger fas fa-trash pointer ' onClick={() => handleDelete(t._id)} /></td>
                            <Link to={`/admin/schoolyear/settings/${t._id}`}> <AiFillSetting className='iconsize mt-2' /> </Link>
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

export default YearsList;