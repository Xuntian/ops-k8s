import axios from 'axios'
export const gitlabAxiosInstance = axios.create({
  baseURL: process.env.GITLAB_API_PREFIX,
  headers: {
    'PRIVATE-TOKEN': ''
  }
})
export const setFile = function(args) {
  let {
    projectId,
    filepath,
    branch,
    content,
    commitMessage,
    privateToken
  } = args
  gitlabAxiosInstance.defaults.headers['PRIVATE-TOKEN'] = privateToken
  let postUrl = `/projects/${projectId}/repository/files/${filepath}`
  gitlabAxiosInstance
    .post(postUrl, {
      branch,
      content,
      commit_message: commitMessage
    })
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
}
export const gitlab = {
  setFile
}

export default gitlab
