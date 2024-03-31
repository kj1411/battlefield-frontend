import axios from "../Axios"

export const getDetails = async()=> {
    try {
        console.log("here")
        const response = await axios.get("/serverPage")
        console.log("hiii", response)
        if(!response.data.success){
            throw new Error(response.message)
        }
        return {
            success:true,
            data:response.data.data
        }
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
        return {
            success:false,
            data:message
        }
    }
}