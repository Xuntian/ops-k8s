<template>
  <div class="join-form">
    <img @click="closeDialog" class="close-btn" src="@/assets/pac/close.png" alt="">
    <h1 class="title">
      <img src="@/assets/pac/form_big_dot_left.png" alt="">账号注册<img class="rotate-180-deg" src="@/assets/pac/form_big_dot_left.png" alt="">
    </h1>
    <div class="form">
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/user.png" alt="">
        <input v-model="username" class="input-content" type="text" name="username" placeholder="请输入账号">
      </div>
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/unlock.png" alt="">
        <input class="input-content" type="password" name="password" style="display: none">
        <input v-model="password" class="input-content" type="password" name="password" placeholder="请输入密码">
      </div>
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/mobile-Phone.png" alt="">
        <input v-model="phone" class="input-content" type="text" name="phone" placeholder="请输入手机号码">
      </div>
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/security.png" alt="">
        <input v-model="code" class="input-content" type="text" name="code" placeholder="请输入验证码">
        <div class="get-code-btn" :class="{'get-code-btn-disabled': reSendCodeTime>0}" @click='getVerifyCode'>{{sendCodeBtnText}}</div>
      </div>
      <div class="agree-service-line">
        <span class="fake-checkbox" :class="{'active': isAgreeService}" @click="toggleAgreeServices"></span>
        <span @click="toggleAgreeServices">申请即视为同意</span>
        <a href="http://keepwork.com/wiki/license" target="_blank">《Keepwork用户协议》</a>
      </div>
      <p class="error-msg" v-show="joinErrMsg">{{joinErrMsg}}</p>
      <div class="register-button" :class="{'active': isAgreeService}" @click='toRegister'>
        立即注册
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import gitlabApiGenerator from 'node-gitlab-api'
import contactContent from '@/../static/profile_datas/contact.md'
import profileContent from '@/../static/profile_datas/profile.md'
import siteContent from '@/../static/profile_datas/site.md'
let GitlabApi = new gitlabApiGenerator({
  url: 'http://git.keepwork.com',
  token: ' '
})
let axiosInstance = axios.create({
  baseURL: 'http://keepwork.com/api/wiki/models'
})
export default {
  name: 'join',
  computed: {
    sendCodeBtnText() {
      return this.reSendCodeTime > 0
        ? `重新发送(${this.reSendCodeTime}s)`
        : '获取验证码'
    }
  },
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      code: '',
      joinErrMsg: '',
      reSendCodeTime: 0,
      reSendCodeInteval: undefined,
      isAgreeService: true
    }
  },
  methods: {
    _encodeURIComponent(url) {
      return encodeURIComponent(url).replace(/\./g, '%2E')
    },
    closeDialog() {
      this.$emit('close')
    },
    toggleAgreeServices() {
      this.isAgreeService = !this.isAgreeService
    },
    startReSendCodeTimer() {
      this.reSendCodeTime = 60
      let that = this
      this.reSendCodeInteval = setInterval(() => {
        that.reSendCodeTime--
        if (that.reSendCodeTime <= 0) {
          clearInterval(that.reSendCodeInteval)
        }
      }, 1000)
    },
    getVerifyCode() {
      this.joinErrMsg = ''
      if (this.reSendCodeTime > 0) {
        return
      }
      if (!this.phone) {
        this.joinErrMsg = '请先输入手机号'
        return
      }
      if (!/^[0-9]{11}$/.test(this.phone)) {
        this.joinErrMsg = '请输入正确的手机号'
        return
      }
      let that = this
      axiosInstance
        .post('/user/verifyCellphoneOne', {
          cellphone: this.phone
        })
        .then(function(result) {
          let data = result.data
          if (data.data) {
            that.smsId = data.data.smsId
            that.startReSendCodeTimer()
            return
          }
          that.joinErrMsg = data.error.message
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    async createProfilePages(userDataSource) {
      console.log(userDataSource)
      let projectId = userDataSource.projectId
      let username = userDataSource.username
      let privateTokem = userDataSource.dataSourceToken
      let gitlabAxiosInstance = axios.create({
        baseURL: 'https://git.keepwork.com/api/v4',
        headers: {
          'PRIVATE-TOKEN': privateTokem
        }
      })
      let pagePrefix = username + '_datas/'
      let profilePagesList = [
        {
          filepath: pagePrefix + 'profile.md',
          content: profileContent
        },
        {
          filepath: pagePrefix + 'site.md',
          content: siteContent
        },
        {
          filepath: pagePrefix + 'contact.md',
          content: contactContent
        }
      ]
      // console.log(profilePagesList)
      for (let pageObj of profilePagesList) {
        let filepath = this._encodeURIComponent(pageObj.filepath)
        let postUrl = `/projects/${projectId}/repository/files/${filepath}`
        await gitlabAxiosInstance
          .post(postUrl, {
            branch: 'master',
            content: pageObj.content,
            commit_message: 'init profile page'
          })
          .then(function(result) {})
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    async createProfileIndexPage(userinfo, token) {
      axiosInstance
        .post(
          '/pages/insert',
          {
            url: `/${userinfo.username}`
          },
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        .then(result => {})
        .catch(error => {
          console.log(error)
        })
    },
    toRegister() {
      this.joinErrMsg = ''
      if (!this.isAgreeService) {
        this.joinErrMsg = '同意协议后才能注册哦'
        return
      }
      const loading = this.$loading({
        lock: true,
        text: '请稍等...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      if (!this.username) {
        this.joinErrMsg = '请输入账号'
        loading.close()
        return
      }
      if (this.password.length < 6) {
        this.joinErrMsg = '密码最少为6位数'
        loading.close()
        return
      }
      if (!this.smsId) {
        this.joinErrMsg = '请先获取验证码'
        loading.close()
        return
      }
      if (!this.phone) {
        this.joinErrMsg = '请输入手机号'
        loading.close()
        return
      }
      if (!this.code) {
        this.joinErrMsg = '请输入验证码'
        loading.close()
        return
      }
      if (this.username.length > 30) {
        this.joinErrMsg = '账号需小于30位'
        loading.close()
        return
      }
      let joinParams = {
        username: this.username,
        password: this.password,
        cellphone: this.phone,
        smsCode: this.code,
        smsId: this.smsId,
        portrait: 'http://keepwork.com/wiki/assets/imgs/default_portrait.png'
      }
      let that = this
      axiosInstance
        .post('/user/register', joinParams)
        .then(async function(result) {
          let data = result.data
          if (data.data) {
            console.log(data.data)
            let userinfo = data.data.userinfo
            let token = data.data.token
            let userDataSource = userinfo.dataSource[0]
            await that.createProfilePages(userDataSource)
            await that.createProfileIndexPage(userinfo, token)
            console.log('success')
            loading.close()
            let userinfoString = JSON.stringify(userinfo)
            let tokenString = JSON.stringify(token)
            localStorage.setItem('userinfo', userinfoString)
            localStorage.setItem('token', tokenString)
            that.$emit('onLogined')
            return
          }
          loading.close()
          that.joinErrMsg = data.error.message
        })
        .catch(function(error) {
          loading.close()
          console.log(error)
          that.joinErrMsg = error
        })
      console.log(joinParams)
    }
  }
}
</script>
<style lang="scss" scoped>
.join-form {
  text-align: center;
  padding: 0 28px;
  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    cursor: pointer;
  }
  .rotate-180-deg {
    transform: rotate(180deg);
  }
  input:focus{
    outline: none;
  }
  .form {
    padding: 0 20px;
  }
  .title {
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 30px;
    img {
      vertical-align: middle;
      margin: 0 15px;
    }
  }
  .title::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background-color: #dcdcdc;
    bottom: 0;
  }
  .title::after {
    content: '';
    position: absolute;
    left: 25px;
    right: 25px;
    bottom: 0;
    height: 7px;
    background-color: #dcdcdc;
    border: 16px solid #fff;
    border-width: 0 16px;
  }
  .input-group {
    border: 5px solid #e0e0e0;
    padding-left: 40px;
    position: relative;
    height: 48px;
    line-height: 48px;
    margin-bottom: 16px;
    background-color: #efefef;
  }
  .input-content {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 15px;
    color: #909199;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0 20px;
  }
  .input-addon {
    position: absolute;
    left: 18px;
    top: 10px;
  }
  .register-button {
    width: 100%;
    height: 65px;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    margin: 32px 0 22px;
    box-sizing: border-box;
    opacity: 0.5;
    cursor: not-allowed;
    line-height: 60px;
    background-color: #3b5bed;
    color: #fff;
    box-shadow: inset 0 -8px 0 0 #273da4;
    border-radius: 4px;
  }
  .register-button.active {
    opacity: 1;
    cursor: pointer;
  }
  .error-msg {
    text-align: left;
    color: red;
  }
  .get-code-btn {
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #faac23;
    color: #434103;
    font-weight: bold;
    box-sizing: border-box;
    cursor: pointer;
    margin: -5px;
    box-shadow: 0 10px 0 0 #c89f2e;
    height: 100%;
    line-height: 55px;
  }
  .get-code-btn-disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
  .agree-service-line {
    text-align: left;
    padding-left: 12px;
    cursor: pointer;
    margin-bottom: 16px;
    a {
      text-decoration: none;
      color: #237efa;
    }
  }
  .fake-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid #303133;
    box-sizing: border-box;
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
  }
  .fake-checkbox.active::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #303133;
    position: absolute;
    left: 3px;
    top: 3px;
  }
}
</style>