import axios from 'axios'

export const getTeachers = async () => {    
    return await axios.get(`${process.env.REACT_APP_API}/teachers`)
}


export const createTeacher = async (teacher, authToken) => {
    console.log("teacher:",teacher)
    return await axios.post(`${process.env.REACT_APP_API}/teacher`, teacher)
}



// export const getCategory = async (slug) => {
//     return await axios.get(`${process.env.REACT_APP_API}/category/${slug}`)
// }

// export const removeCategory = async (slug, authToken) => {
//     return await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, { headers: { authToken } })
// }

// export const updateCategory = async (slug, category, authToken) => {
//     return await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, { headers: { authToken} })
// }


