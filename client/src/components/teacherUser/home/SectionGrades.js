import React from 'react';

const SectionGrades = ({ grades, schoolyear, course, section, handleChange }) => {

    const handleChange

    return (

        <div>
            <h4>Schoolyear: <span className='text-primary'>{schoolyear} </span></h4>
            <h5>course:<span className='text-danger'>{course} </span>  section:<span className='text-danger'>{section}</span> </h5>
            <table className='table'>

                <thead>
                    <tr>
                        <th scope="col">Student</th>
                        <th scope="col">Term1</th>
                        <th scope="col">Term2</th>
                        <th scope="col">Term3</th>
                        <th scope="col">Term4</th>
                    </tr>
                </thead>

                <tbody>
                    {grades.map((s) => {
                        return (<>

                            <tr >
                                <td className='text-primary'>{s.studentName}</td>
                                <td>  <input type="number" className='form-control' name="grade1" placeholder="Greade 1" value={s.grade1} onChange={(s) => handleChange(s)} /> </td>
                                <td>  <input type="number" className='form-control' name="grade2" placeholder="Greade 2" value={s.grade2} onChange={(s) => handleChange(s)} /></td>
                                <td> <input type="number" className='form-control' name="grade3" placeholder="Greade 3" value={s.grade3} onChange={(s) => handleChange(s)} /> </td>
                                <td> <input type="number" className='form-control' name="grade4" placeholder="Greade 4" value={s.grade4} onChange={(s) => handleChange(s)} /> </td>
                            </tr>

                        </>
                        )
                    }
                    )}
                </tbody>

            </table>

        </div>
    );
};

export default SectionGrades;