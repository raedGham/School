import axios from 'axios'

export const getSections = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/sections`)
}


export const createSection = async (section, authToken) => {
    console.log("section:", section)
    return await axios.post(`${process.env.REACT_APP_API}/section`, section, { headers: { authToken } })
}


export const removeSection = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/section/${id}`, { headers: { authToken } })
}

export const updateSection = async (section, authToken) => {
    console.log("section:", section);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/section/${section._id}`, section, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}


export const addOrUpdateSecStudents = async (YrStudentsSections, authToken) => {
    console.log("Functions: ",YrStudentsSections )
    return await axios.post(`${process.env.REACT_APP_API}/section/schoolyear/students`, YrStudentsSections, { headers: { authToken } })
}

export const getSectionStudents = async (schoolyear, section) => {

    return await axios.get(`${process.env.REACT_APP_API}/section/${section._id}/schoolyear/${schoolyear._id}/getstudents`)
}
