import axios from 'axios'

export const getSubjects = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/subjects`)
}


export const createSubject = async (subject, authToken) => {
    console.log("subject:", subject)
    return await axios.post(`${process.env.REACT_APP_API}/subject`, subject, { headers: { authToken } })
}


export const removeSubject = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/subject/${id}`, { headers: { authToken } })
}

export const updateSubject = async (subject, authToken) => {
    console.log("Subject:", subject);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/subject/${subject._id}`, subject, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}

