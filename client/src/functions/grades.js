
import axios from 'axios';


export const createGrade = async (grades, authToken) => {
    console.log("grades function:", grades)
    return await axios.post(`${process.env.REACT_APP_API}/grades`, grades, { headers: { authToken } })
}

export const sectionGrades = async (courseId, schoolYearId, sectionId, authToken) => {
    // console.log(courseId);
    // console.log(schoolYearId);
    // console.log(sectionId);
    return await axios.get(`${process.env.REACT_APP_API}/getgrades/${courseId}/${schoolYearId}/${sectionId}`, { headers: { authToken } })
}