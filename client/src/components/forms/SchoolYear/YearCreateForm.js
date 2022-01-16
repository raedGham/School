import React from 'react';

const YearCreateForm = ({ values, handleChange, handleSubmit }) => {
    const { name, description } = values;
    return (
        <form onSubmit={handleSubmit}>

            <div className='form-group m-2'>
                <label className='text-primary'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name} onChange={handleChange} />
            </div>
            <div className='form-group m-2'>
                <label className='text-primary'>Description</label>
                <input type="text" name="description" className='form-control form-control-sm' value={description} onChange={handleChange} />
            </div>

            <br />
            <button type="submit" className='btn btn-outline-primary'> Save</button>
        </form>
    );
};

export default YearCreateForm;