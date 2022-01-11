import axios from 'axios';

export const getUsers = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/users`)
}
