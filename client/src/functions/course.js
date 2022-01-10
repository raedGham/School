import axios from 'axios'

export const getCourses = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/courses`)
}


export const createCourse = async (course, authToken) => {
    console.log("course:", course)
    return await axios.post(`${process.env.REACT_APP_API}/course`, course, { headers: { authToken } })
}


export const removeCourse = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/course/${id}`, { headers: { authToken } })
}

export const updateCourse = async (course, authToken) => {
    console.log("Course:", course);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/course/${course._id}`, course, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}

