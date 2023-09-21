import { httpInstance } from "../util/http";

type PostInfo = {
    debugGtade:number,
    designGrade:number,
    exerciseGrade:number,
    groupName:string,
    innovativeGrade:number,
    practicalGrade:number,
    projectId:number,
    tacheId:number,
    userId:number,
    verifyGrade:number,


}
export const postGroupScoreAPI = (data:PostInfo)=>{
    return httpInstance({
        url:'/information/scoring',
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        data,
       
    })
}