import React from 'react';

const UserUpdateForm = ({ values, handleChange, handleUpdateSubmit, handleRadioChange }) => {
    const { name, email, role } = values;

    return (
        <form onSubmit={handleUpdateSubmit}>

            <div className='form-group m-2'>
                <label className='text-primary'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name} onChange={handleChange} />
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Email</label>
                <input type="text" name="email" className='form-control form-control-sm' value={email} disabled />
            </div>

            <div className='form-group m-2' >

                <div class="form-check">
                    <input className="form-check-input" type="radio" name="role" id="b1" value="teacher" onChange={handleRadioChange} checked />
                    <label className="form-check-label" for="b1">Teacher</label>
                </div>
                <div class="form-check" >
                    <input className="form-check-input" type="radio" name="role" id="b2" value="admin" onChange={handleRadioChange} />
                    <label className="form-check-label" for="b2">Admin</label>
                </div>

            </div>
            <button type="submit" className='btn btn-outline-primary'>Update</button>
        </form>
    );
};

export default UserUpdateForm;