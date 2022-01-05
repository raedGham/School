import axios from 'axios'

export const getClasses = async () => {    
    return await axios.get(`${process.env.REACT_APP_API}/classes`)
}


export const createClass = async (classs, authToken) => {
    console.log("classs:",classs)
    return await axios.post(`${process.env.REACT_APP_API}/class`, classs , { headers: { authToken } })
}


export const removeClass = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/class/${id}`, { headers: { authToken } })
}

export const updateClass = async (classs, authToken) => {
    console.log("classs:", classs);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/class/${classs._id}`, classs, { headers: { authToken} })
    .then((res)=> console.log(res))
    .catch((err) => console.log("Error in funct",err));
}

