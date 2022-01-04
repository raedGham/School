import axios from 'axios'

export const getTeachers = async () => {    
    return await axios.get(`${process.env.REACT_APP_API}/teachers`)
}


export const createTeacher = async (teacher, authToken) => {
    console.log("teacher:",teacher)
    return await axios.post(`${process.env.REACT_APP_API}/teacher`, teacher , { headers: { authToken } })
}


export const removeTeacher = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/teacher/${id}`, { headers: { authToken } })
}

export const updateTeacher = async (teacher, authToken) => {
    console.log("teacher:", teacher);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/teacher/${teacher._id}`, teacher, { headers: { authToken} })
    .then((res)=> console.log(res))
    .catch((err) => console.log("Error in funct",err));
}


