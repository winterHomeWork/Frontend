import axios, { AxiosInstance } from "axios"

const customAxios : AxiosInstance = axios.create({
  baseURL : "https://prod-server.xquare.app/nudia"
})

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("access")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

customAxios.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status !== 401) {
      return Promise.reject(err)
    }
    try {
      const reFreshToken = localStorage.getItem("refresh")
      const { data } = await axios.post(
        "https://prod-server.xquare.app/nudia/",
        {
          reFreshToken,
        },
      )
      localStorage.setItem("access",data.accessToken)
    } catch {}
  } 
)