import axios from "axios"


const baseURL = "http://localhost:3000"

export async function getAllNews(){
    const response = await axios.get(`${baseURL}/news`)
    return response
}