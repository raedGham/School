import axios from 'axios'

export const getStudents = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/students`)
}


export const createStudent = async (student, authToken) => {
    //console.log("student:", student)
    return await axios.post(`${process.env.REACT_APP_API}/student`, student, { headers: { authToken } })
}


export const removeStudent = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/student/${id}`, { headers: { authToken } })
}

export const updateStudent = async (student, authToken) => {
    console.log("student:", student);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/student/${student._id}`, student, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}


export const getStudentsCount = async (authToken) => {
    return await axios.get(`${process.env.REACT_APP_API}/students/total`, { headers: { authToken } })
}


export const getStudentsByPage = async (sort, order, page, perPage, authToken) => {

    return await axios.post(`${process.env.REACT_APP_API}/students`, { sort, order, page, perPage },{ headers: { authToken } })
}
