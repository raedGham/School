
import axios from 'axios';


export const createGrade = async (grades, authToken) => {
    console.log("grades function:", grades)
    return await axios.post(`${process.env.REACT_APP_API}/grades`, grades, { headers: { authToken } })
}