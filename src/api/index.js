import axios from "axios";

// 사용자 관련
function userInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_USER_BASE_URL,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      return instance;
}

export { userInstance };