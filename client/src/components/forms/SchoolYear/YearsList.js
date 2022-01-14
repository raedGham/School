import React from 'react';


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
                            <td > <a className='text-primary fa fa-edit pointer vertalign' onClick={() => handleEditClick(t)} /></td>
                            <td> <a className='text-danger fas fa-trash pointer vertalign' onClick={() => handleDelete(t._id)} /></td>
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