import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createStudent, getStudents,  updateStudent, removeStudent  } from '../../functions/student';
import StudentsList from '../../components/forms/StudentsList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
//import StudentCreateForm from '../../components/forms/StudentCreateForm';
//import StudentUpdateForm from "../../components/forms/StudentUpdateForm";

const StudentsCreate = () => {
    const initialState = {
         code:"",
        name: "",
        email: "",
        address: "",
        mobile: undefined,
        birthDate: "",
        area: "",     

    }
    const [values, setValues] = useState(initialState);

    const { user } = useSelector(state => ({ ...state }));
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
   


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("User", user);
//         createStudent(values, user.token)
//             .then(res => {
//                 toast.success(`${res.data.name} created Sucessfully`)
//                 setInterval(() =>loadStudents(), 500);
//             })
//             .catch(err => {
//                 console.log("create Student catch err", err.response)
//                 if (err.response.status === 400)  toast.error(err.response.data);
//     })
 };

const handleUpdateSubmit = (e) => {
    e.preventDefault();

    // updateStudent(values, user.token)
    //     .then(res => {
    //         console.log("UPDATED")
    //         toast.success(`Updated Sucessfully`)
    //         setInterval(() => loadStudents(), 500);
    //     })
    //     .catch((err) => console.log("Update Student catch err", err) )          
         
};


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    
    useEffect(() => loadStudents(), []);

    const loadStudents= () => {
        if (show) setShow(false);
        if (showUpdate) setShowUpdate(false);
        getStudents()
            .then((s) => {
                setStudents(s.data);        
            }
            )
    }

    const addStudent = () => {
     setValues( initialState);
    setShow(true);
    }


    const handleEditClick= (t) => { 
        setValues({...t}); 
        console.log(values);
       if(show) setShow(false); 
       if (!showUpdate) setShowUpdate(true);       
   }
   
   const handleDelete = (id) => {
    // if (window.confirm("Delete?")) {
    //     removeStudent(id, user.token)
    //         .then(res => {              
    //             toast.error(`${res.data.name} REMOVED`);
    //         }).catch((err) => {
    //             if (err.response.status === 400) toast.error(err.response.data)
    //         })
    // }
}  
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">  <AdminNav /></div>

                <div className="col-md-3 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : <h4>Students</h4>}
                    { <StudentsList students={students}  handleEditClick={(t)=>handleEditClick(t)}  handleDelete={(t)=>handleDelete(t)}/>}
                </div>

                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addStudent} hidden={showUpdate} >Add Student</button>
                        {/* {show ? (<StudentCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit}/>) : ""}
                        {showUpdate ? <StudentUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit}/> :""} */}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default StudentsCreate;