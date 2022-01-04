import axios from 'axios'

export const getStudents = async () => {    
    return await axios.get(`${process.env.REACT_APP_API}/students`)
}


export const createStudent = async (teacher, authToken) => {
    console.log("student:",teacher)
    return await axios.post(`${process.env.REACT_APP_API}/student`, teacher , { headers: { authToken } })
}


export const removeStudent = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/student/${id}`, { headers: { authToken } })
}

export const updateTeacher = async (student, authToken) => {
    console.log("student:", teacher);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/student/${teacher._id}`, student, { headers: { authToken} })
    .then((res)=> console.log(res))
    .catch((err) => console.log("Error in funct",err));
}
