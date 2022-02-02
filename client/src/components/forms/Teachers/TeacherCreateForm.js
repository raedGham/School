import React from 'react';

const TeacherCreateForm = ({values, errors, handleChange, handleSubmit}) => {
    const {name, email, address, mobile, degree, birthDate, startDate } = values;
    return (
        <form onSubmit={handleSubmit}>
           {/* <pre>{JSON.stringify(values,undefined,2)}</pre> */}
            <div className='form-group mt-1'>
                <label className='bold'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name} onChange={handleChange} />
                <p className='text-danger'>{errors.name}</p>
            </div>

            <div className='form-group mt-1'>
                <label className='bold'>Email</label>
                <input type="text" name="email" className='form-control form-control-sm' value={email} onChange={handleChange} />
                <p className='text-danger'>{errors.email}</p>
            </div>

            <div className='form-group mt-1'>
                <label className='bold'>Address</label>
                <input type="text" name="address" className='form-control form-control-sm' value={address} onChange={handleChange} />
            </div>

            <div className='form-group mt-1'>
                <label className='bold'>Mobile</label>
                <input type="number" name="mobile" className='form-control form-control-sm' value={mobile} onChange={handleChange} />
            </div>

         
            <div className='form-group mt-1'>
                <label className='bold'>Degree</label>
                <input type="text" name="degree" className='form-control form-control-sm' value={degree} onChange={handleChange} />
            </div>

            <div className='form-group mt-1'>
                <label className='bold'>BirthDate</label>
                <input type="date" name="birthDate" className='form-control form-control-sm' value={birthDate} onChange={handleChange} />
            </div>

            <div className='form-group mt-1'>
                <label className='bold'>StartDate</label>
                <input type="date" name="startDate" className='form-control form-control-sm' value={startDate} onChange={handleChange} />
            </div>

            <br />
            <button type = "submit" className='btn btn-outline-primary'> Save</button>
       </form>
    );
};

export default TeacherCreateForm;