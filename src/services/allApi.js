import { baseUrl } from "./baseUrl"
import { comonApi } from "./comonApi"

export const registrationApi=async(userDetails)=>{
    return await comonApi("POST",`${baseUrl}/registration`,userDetails,"")
}

export const loginApi=async(loginData)=>{
    return await comonApi("POST",`${baseUrl}/login`,loginData,"")
}