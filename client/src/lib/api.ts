import axios from "axios";


const apiUrl=" http://localhost:3001/api";

export async function getCategories(qeryParams: string) {
    const response = await axios.get(`${apiUrl}/films`, {
        params: {
            categories: qeryParams
        }
    });
    
    return response.data;
}