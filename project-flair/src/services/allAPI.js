import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"



// register api
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)

}
// login api -called by componenet Auth
export const loginApi = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}
//add project
export const addProjectAPi = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}
// get all projects
export const getAllProjectsApi = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects/search?=${searchKey}`,"",reqHeader)
}
// get user projects
export const getUserProjectsApi = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}
// get home projects
export const getHomeProjectsApi = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"")
}
// edit project
export const editProjectApi = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-projects/${projectId}`,reqBody,reqHeader)
}
// remove projects
export const removeProjectApi = async (projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-projects/${projectId}`,{},reqHeader)
}
// update user 
export const updateUserApi = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}