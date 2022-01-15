import React from 'react';

const StudentUpdateForm = ({ values, handleChange, handleUpdateSubmit }) => {
    const { description, name } = values;
    return (
        <form onSubmit={handleUpdateSubmit}>

            <div className='form-group m-2'>
                <label className='text-primary'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name} onChange={handleChange} />
            </div>
            <div className='form-group m-2'>
                <label className='text-primary'>Description</label>
                <input type="text" name="description" className='form-control form-control-sm' value={description} onChange={handleChange} />
            </div>


            <br />
            <button type="submit" className='btn btn-outline-primary'> Update</button>
        </form>
    );
};

export default StudentUpdateForm;