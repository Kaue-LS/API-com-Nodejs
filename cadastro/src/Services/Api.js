import axios from "axios";

export const Get=axios.create({
    baseURL:'http://localhost:8000',
    method:'GET'
    
})
export const GetbyID=axios.create({
    baseURL:'http://localhost:8000',
    method:'GET'
    
})
export const Post=axios.create({
    baseURL:'http://localhost:8000',
    method:'POST'
    
})
export const Put=axios.create({
    baseURL:'http://localhost:8000',
    method:'PUT'
    
})
export const Delete=axios.create({
    
    baseURL:'http://localhost:8000',
    method:'DELETE'
    
})