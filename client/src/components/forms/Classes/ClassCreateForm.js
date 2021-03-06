import React from 'react';

const ClassCreateForm = ({ values, setValues, handleChange, handleSubmit, sections, handleSectionChange }) => {
    const { name, code } = values;
    return (
        <form onSubmit={handleSubmit}>

            <div className='form-group m-2'>
                <label className='text-primary'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name} onChange={handleChange} />
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Code</label>
                <input type="text" name="code" className='form-control form-control-sm' value={code} onChange={handleChange} />
            </div>
            <div className='form-group m-2'>
                <label className='text-primary'>Level</label>
                <select name="level" className='form-control' onChange={handleChange} >
                    <option value="KG">KG</option>
                    <option value="Basic">Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Secondary">Secondary</option>

                </select>
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Class Sections</label>
                <select name="sections" className='form-control' onChange={handleSectionChange} multiple>
                    {sections.map((s) => <option value={s._id}>{s.name}</option>

                    )}

                </select>
            </div>
            <br />
            <button type="submit" className='btn btn-outline-primary'> Save</button>
        </form>
    );
};

export default ClassCreateForm;