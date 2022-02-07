import React from 'react';

const SectionGrades = ({ s, index }, grades, setGrades) => {

    const handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(index)
        let gradesTemp = grades;
        console.log(gradesTemp);
        gradesTemp.map((item, ind) => {
            if (ind = index) {
                item.e.target.name = e.target.value;
            }
        })
        setGrades(gradesTemp)
    }
    return (

        <tr key={index}>
            {JSON.stringify(grades)}
            <td className='text-primary'>{s.studentName}</td>
            <td>  <input type="number" className='form-control' name="grade1" placeholder="Greade 1" value={s.grade1} onChange={handleChange} /> </td>
            <td>  <input type="number" className='form-control' name="grade2" placeholder="Greade 2" value={s.grade2} /></td>
            <td> <input type="number" className='form-control' name="grade3" placeholder="Greade 3" value={s.grade3} /> </td>
            <td> <input type="number" className='form-control' name="grade4" placeholder="Greade 4" value={s.grade4} /> </td>
        </tr>


    )
}

export default SectionGrades;