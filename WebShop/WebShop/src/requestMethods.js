import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//we took the token from postman
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTBhODRmMDA2MWVhODcxMjVmOTRiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDUwNzk1MiwiZXhwIjoxNjcwNzY3MTUyfQ.Vx7ZQDETlQprAEJCAEd3E9ACBFC0MWdKQMDNpwXcDa8"; 
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });

  