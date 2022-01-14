import axios from 'axios'

export const getYears = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/years`)
}


export const createYear = async (year, authToken) => {
    //console.log("year:", year)
    return await axios.post(`${process.env.REACT_APP_API}/year`, year, { headers: { authToken } })
}


export const removeYear = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/year/${id}`, { headers: { authToken } })
}

export const updateYear = async (year, authToken) => {
    console.log("year:", year);
    console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/year/${year._id}`, year, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}