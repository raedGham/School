import React from 'react';

const SubSubjectsCreateForm = ({ values, setValues, handleChange, handleSubmit }) => {
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

            <br />
            <button type="submit" className='btn btn-outline-primary'> Save</button>
        </form>
    );
};

export default SubSubjectsCreateForm;