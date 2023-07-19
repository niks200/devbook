import api from "../utils/api";
export const getUser = async () => {
    
   try {
    const res = await api.get("/users/getAllUser")
    return res.data
    
   } catch (error) {
    console.error(error)
   }
  
};
