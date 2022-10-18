import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAx5jyJBZGHksXE2Zru77tVsrDDcqFYEMM",
  },
});

export default request;
