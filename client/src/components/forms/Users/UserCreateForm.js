import React from 'react';

const UserCreateForm = ({values,password, handleChange, handleSubmit, handleRadioChange,  handlePasswordChange}) => {
    const {name, email, role } = values;
    
    return (
        <form onSubmit={handleSubmit}>

            <div className='form-group m-2'>
                <label className='text-primary'>Name</label>
                <input type="text" name="name" className='form-control form-control-sm' value={name} onChange={handleChange} />
            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Email</label>
                <input type="text" name="email" className='form-control form-control-sm' value={email} onChange={handleChange} />
            </div>

            <div className='form-group m-2' >

              <div class="form-check">
                  <input className="form-check-input" type="radio" name="role" id="b1" value="teacher" onChange={handleRadioChange} />
                    <label className="form-check-label" for="b1">Teacher</label>
                    </div>
                <div class="form-check" >
                    <input className="form-check-input" type="radio" name="role" id="b2" value="admin" onChange={handleRadioChange} />
                    <label className="form-check-label" for="b2">Admin</label>
                </div>

            </div>

            <div className='form-group m-2'>
                <label className='text-primary'>Password</label>
                <input type="text" name="password" className='form-control form-control-sm' value={password} onChange={handlePasswordChange} />
            </div>

            <button type = "submit" className='btn btn-outline-primary'> Save</button>
       </form>
    );
};

export default UserCreateForm;