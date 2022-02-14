import React from 'react';

const SectionGrades = ({ s, index, grades, setGrades }) => {

    const handleChange = (e) => {

        console.log(grades);
        console.log(index);

        const { name, value } = e.target;

        const newGrades = grades.map((grade, ind) => {
            if (ind !== index) {
                return { ...grade };
            }

            return { ...grade, [name]: parseInt(value) };
        });

        setGrades(newGrades);


    }
    return (

        <tr key={index}>
            {/* {JSON.stringify(grades)} */}
            <td className='text-primary'>{s.studentName}</td>
            <td>  <input type="number" className='form-control' name="grade1" placeholder="Greade 1" value={s.grade1} onChange={handleChange} /> </td>
            <td>  <input type="number" className='form-control' name="grade2" placeholder="Greade 2" value={s.grade2} onChange={handleChange} /></td>
            <td> <input type="number" className='form-control' name="grade3" placeholder="Greade 3" value={s.grade3} onChange={handleChange} /> </td>
            <td> <input type="number" className='form-control' name="grade4" placeholder="Greade 4" value={s.grade4} onChange={handleChange} /> </td>
        </tr>


    )
}

export default SectionGrades;