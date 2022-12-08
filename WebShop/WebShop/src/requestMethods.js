import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTBhODRmMDA2MWVhODcxMjVmOTRiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDUwNDMzMCwiZXhwIjoxNjcwNzYzNTMwfQ.ABLruSotYj7bd7N-3-FGQCIu9Y2NPzoz-ZEpTE4JTtA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});
