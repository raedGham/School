import React from 'react';
const TList = ({ teachers, handleSelectTeacher }) => {
    return (
        <div>
            <table className='table table-outline' >
                <thead className='thead'>
                    <tr>

                        <th scope="col">Name/Email</th>

                    </tr>
                </thead>
                <tbody>
                    {teachers.map((t) => <tr key={t._id}>


                        <td className='bold'> <a className='pointer' onClick={() => handleSelectTeacher(t)}>{t.name}  </a> <h6 >{t.email}</h6> </td>


                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default TList;