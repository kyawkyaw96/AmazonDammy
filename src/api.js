import axios from "axios";

const BASE_URL = "https://dummyjson.com";
export const fetchProductsApi = async (url) => {
  try {
    const  data  = await axios.get(`${BASE_URL}/${url}`);
    // console.log(data?.products);
    return data;
  } catch (error) {
    return error;
  } 
};
