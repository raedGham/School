import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { createStudent, updateStudent, removeStudent , getStudentsCount, getStudentsByPage} from '../../functions/student';
import StudentsList from '../../components/forms/StudentsList';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import StudentCreateForm from '../../components/forms/StudentCreateForm';
import StudentUpdateForm from "../../components/forms/StudentUpdateForm";
import ReactPaginate from "react-paginate";

const StudentsCreate = () => {
    const initialState = {
        code: "",
        name: "",
        email: "",
        address: "",
        mobile: undefined,
        birthDate: "",
        area: "",

    }
    const [values, setValues] = useState(initialState);
    const [studentsCount, setStudentsCount] = useState(0);
    const [page, setPage] = useState(0);  
    const { user } = useSelector(state => ({ ...state }));
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState();
    const [showUpdate, setShowUpdate] = useState();
    const perPage = 5;
     

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("User", user);
        createStudent(values, user.token)
            .then(res => {
                toast.success(`${res.data.name} created Sucessfully`)
                setInterval(() => {
                    setShow(false);
                    loadStudents()}, 500);
            })
            .catch(err => {
                console.log("create Student catch err", err.response)
                if (err.response.status === 400) toast.error(err.response.data);
            })
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        updateStudent(values, user.token)
            .then(res => {
                console.log("UPDATED")
                toast.success(`Updated Sucessfully`)
                setInterval(() => {
                    setShowUpdate(false);                                     
                    // loadStudents()
                
                }, 500);
            })
            .catch((err) => console.log("Update Student catch err", err))

    };


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log()
        getStudentsCount(user.token)
          .then((res) => setStudentsCount(res.data));
    
      },[]);
    

    useEffect(() => loadStudents(), [page]);
   

    const loadStudents = () => {    
        setLoading(true)
         getStudentsByPage('name', 'desc', page+1, perPage,user.token)
            .then((s) => {
                setLoading(false);
                setStudents(s.data);
            }
            )
    }

    const addStudent = () => {
        setValues(initialState);
        if (showUpdate) setShowUpdate(false);
        if(!show) setShow(true);
    }


    const handleEditClick = (t) => {
        setValues({ ...t });
        if (show) setShow(false);
        if (!showUpdate) setShowUpdate(true);
      
    }

    const handleDelete = (id) => {
        if (window.confirm("Delete?")) {
            removeStudent(id, user.token)
                .then(res => {
                    toast.error(`${res.data.name} REMOVED`);
                    setInterval(() => loadStudents(), 500);
                }).catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data)
                })
        }
    }

    const pageCount = studentsCount/perPage;
   
    return (        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">  <AdminNav /></div>
               
                <div className="col-md-4 text-left">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                                                                              <i className="fas fa-book-reader fa-2x"></i> 
                                                                              <span className='h4'> Students </span>
                                                                              </> ) }                              
                    {<StudentsList students={students} handleEditClick={(t) => handleEditClick(t)} handleDelete={(t) => handleDelete(t)} />}                  
                     <ReactPaginate
                       previousLabel={'< Previous'}
                       nextLabel = {'Next >'}
                       pageCount={Math.ceil(pageCount)}
                       onPageChange={({selected})=> setPage(selected)}
                       containerClassName={"paginationBttns"}
                       previousLinkClassName={"previousBttn"}
                       nextLinkClassName={"nextBttn"}
                       disabledClassName={"paginationDisabled"}
                       activeClassName={"paginationActive"}                      
                    />
                </div>
               { console.log("SHOW", show)}
                 {console.log("SHOWUPDATE", showUpdate)}
                <div className="col-md-5 text-left m-2">
                    {loading ? <h4 className='text-danger'>Loading...</h4> : (<>
                        <button className='btn btn-primary ml-4' onClick={addStudent} hidden={showUpdate} >Add Student</button>
                        {show ? (<StudentCreateForm values={values} setValues={setValues} handleChange={handleChange} handleSubmit={handleSubmit} />) : ""}
                        {showUpdate ? <StudentUpdateForm values={values} setValues={setValues} handleChange={handleChange} handleUpdateSubmit={handleUpdateSubmit} /> : ""}
                    </>

                    )}


                </div>


            </div>
        </div>
    );
};

export default StudentsCreate;