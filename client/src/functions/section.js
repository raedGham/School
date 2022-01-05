import axios from 'axios'

export const getSections = async () => {    
    return await axios.get(`${process.env.REACT_APP_API}/sections`)
}


export const createSection = async (section, authToken) => {
    console.log("section:",section)
    return await axios.post(`${process.env.REACT_APP_API}/section`, section , { headers: { authToken } })
}


export const removeSection = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/section/${id}`, { headers: { authToken } })
}

export const updateSubject = async (section, authToken) => {
    console.log("section:", section);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/section/${section._id}`, section, { headers: { authToken} })
    .then((res)=> console.log(res))
    .catch((err) => console.log("Error in funct",err));
}

