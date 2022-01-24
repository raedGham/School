import React from 'react';

const TeacherCard = ({ teacher }) => {
    return (
        <div className=" container-fluid" >
            <div className='card' style={{ width: "400px" }}>
                <div className="card-body">
                    <h5 className="card-title bg-secondary" style={{ color: 'white' }}>  {teacher.name}</h5>
                    <div className='card-text'> {teacher.email} </div>
                    <div className='card-text'> {teacher.address} </div>
                </div>

            </div>
        </div >
    );
};

export default TeacherCard;