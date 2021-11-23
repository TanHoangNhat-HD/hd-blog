import axios from 'axios'

export const DOMAIN = 'https://my-json-server.typicode.com/TanHoangNhat-HD/hd-blog-server'

class ApiService {
  get = (url: string) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET',
    })
  delete = (url: string) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: 'DELETE',
    })

  post = (url: string, data: any) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data,
    })
  put = (url: string, data: any) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: 'PUT',
      data,
    })
}

export const apiService = new ApiService()
