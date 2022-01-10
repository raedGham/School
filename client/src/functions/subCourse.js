import axios from 'axios'

export const getSubCourses = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/subcourses`)
}


export const createSubCourse = async (subCourse, authToken) => {
    console.log("subCourse:", subCourse)
    return await axios.post(`${process.env.REACT_APP_API}/subcourse`, subCourse, { headers: { authToken } })
}


export const removeSubCourse = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/subcourse/${id}`, { headers: { authToken } })
}

export const updateSubCourse = async (subCourse, authToken) => {
    console.log("subCourse:", subCourse);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/subcourse/${subCourse._id}`, subCourse, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}

