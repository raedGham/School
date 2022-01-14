import axios from 'axios';

export const getUsers = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/users`)
}

export const createUser = async (user, authToken) => {
    console.log("user:", user)
    return await axios.post(`${process.env.REACT_APP_API}/user`, user, { headers: { authToken } })
}

export const removeUser = async (id, authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/user/${id}`, { headers: { authToken } })
}

export const updateUser = async (user, authToken) => {
    // console.log("teacher:", teacher);
    // console.log(authToken);
    return await axios.put(`${process.env.REACT_APP_API}/user/${user._id}`, user, { headers: { authToken } })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}

export const resetPass = async (email, password) => {
    //console.log(user);
    //  console.log(password);
    // console.log(authToken);
    return await axios.post(`${process.env.REACT_APP_API}/user/resetpass`, { email, password })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error in funct", err));
}