import React from 'react';
const SList = ({sections, handleSelectSection }) => {
    return (
        <div>
            <table className='table table-outline' >
                <thead className='thead'>
                    <tr>

                        <th scope="col">Sections List</th>

                    </tr>
                </thead>
                <tbody>
                    {sections.map((s) => <tr key={s._id}>


                        <td className='bold'> <a className='pointer' onClick={() => handleSelectSection(s)}>{s.code}  </a> <h6 >{s.name}</h6> </td>


                    </tr>)}
                </tbody>
            </table>


        </div>
    );
};

export default SList;