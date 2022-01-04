import React from 'react';

const TeacherUpdateForm = ({values, setValues, handleChange, handleUpdateSubmit}) => {
    const {name, email, address, mobile, degree, birthDate, startDate } = values;
    return (
        <form  onSubmit={handleUpdateSubmit}>

            <div className='form-group m-2'>
                <label className='text-primary'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name}  onChange={handleChange}/>
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Email</label>
                <input type="text" name="email" className='form-control form-control-sm' value={email}  onChange={handleChange}/>
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Address</label>
                <input type="text" name="address" className='form-control form-control-sm' value={address} onChange={handleChange} />
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Mobile</label>
                <input type="number" name="mobile" className='form-control form-control-sm' value={mobile}  onChange={handleChange}/>
            </div>

         
            <div className='form-group m-2'>
                <label className='text-primary'>Degree</label>
                <input type="text" name="degree" className='form-control form-control-sm' value={degree} onChange={handleChange} />
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>BirthDate</label>
                <input type="date" name="birthDate" className='form-control form-control-sm' value={birthDate} onChange={handleChange}/>
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>StartDate</label>
                <input type="date" name="startDate" className='form-control form-control-sm' value={startDate}  onChange={handleChange}/>
            </div>

            <br />
            <button type = "submit" className='btn btn-outline-primary'> Update</button>
       </form>
    );
};

export default TeacherUpdateForm;