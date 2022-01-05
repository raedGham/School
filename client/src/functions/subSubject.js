import axios from 'axios'

export const getSubSubjects = async () => {    
    return await axios.get(`${process.env.REACT_APP_API}/subsubjects`)
}


export const createSubSubject = async (subSubject, authToken) => {
    console.log("subSubject:",subSubject)
    return await axios.post(`${process.env.REACT_APP_API}/subsubject`, subSubject , { headers: { authToken } })
}


export const removeSubSubject = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/subsubject/${id}`, { headers: { authToken } })
}

export const updateSubSubject = async (subSubject, authToken) => {
    console.log("subSubject:", subSubject);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/subsubject/${teacher._id}`, subSubject, { headers: { authToken} })
    .then((res)=> console.log(res))
    .catch((err) => console.log("Error in funct",err));
}

