import axios from 'axios'
export const keepworkEndpoint = axios.create({
  baseURL: process.env.KEEPWORK_API_PREFIX
})

export const post = (...args) =>
  keepworkEndpoint
    .post(...args)
    .then(res => res.data)

export const user = {
  login: (...args) => post('/user/login', ...args),
  register: (...args) => post('/user/register', ...args),
  verifyCellphoneOne: (...args) => post('/user/verifyCellphoneOne', ...args),
  getProfile: (...args) => post('/user/getProfile', ...args)
}
export const pages = {
  insert: (...args) => post('/pages/insert', ...args)
}
export const keepwork = {
  user,
  pages
}

export default keepwork
