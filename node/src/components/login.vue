<template>
  <div class="login-form">
    <img @click="closeDialog" class="close-btn" src="@/assets/pac/close.png" alt="">
    <div class="login-main-content">
      <h1 class="title">
        <img src="@/assets/pac/form_big_dot_left.png" alt="">登录账号<img class="rotate-180-deg" src="@/assets/pac/form_big_dot_left.png" alt="">
      </h1>
      <div class="form">
        <div class="input-group">
          <img class="input-addon" src="@/assets/pac/user.png" alt="">
          <input v-model="username" class="input-content" type="text" name="username" placeholder="请输入账号">
        </div>
        <div class="input-group">
          <img class="input-addon" src="@/assets/pac/unlock.png" alt="">
          <input v-model="password" class="input-content" type="text" name="password" placeholder="请输入密码">
        </div>
        <p class="error-msg" v-show="loginErrMsg">{{loginErrMsg}}</p>
        <div class="login-button" @click='toLogin'>
          立即登录
        </div>
        <p class="extra-operations">
          <span class="to-join-button" @click="showJoinDialog">立即注册</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import keepwork from '@/api/keepwork'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      loginErrMsg: ''
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    showJoinDialog() {
      this.$emit('showJoinDialog')
      this.closeDialog()
    },
    toLogin() {
      const loading = this.$loading({
        lock: true,
        text: '请稍等...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.loginErrMsg = ''
      if (!this.username) {
        loading.close()
        this.loginErrMsg = '用户名不能为空'
        return
      }
      if (!this.password) {
        loading.close()
        this.loginErrMsg = '密码不能为空'
        return
      }
      let that = this
      keepwork.user
        .login({
          username: this.username,
          password: this.password
        })
        .then((result) => {
          if (result.data) {
            let resultData = result.data
            let userinfo = JSON.stringify(resultData.userinfo)
            let token = JSON.stringify(resultData.token)
            localStorage.setItem('userinfo', userinfo)
            localStorage.setItem('token', token)
            that.$emit('onLogined')
            loading.close()
            return
          }
          that.loginErrMsg = result.error.message
          loading.close()
        }).catch((error)=>{
          that.loginErrMsg = '出错了，请检查网络后重试'
          loading.close()
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  text-align: center;
  padding: 0 28px;
  .rotate-180-deg {
    transform: rotate(180deg);
  }
  input:focus {
    outline: none;
  }
  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    cursor: pointer;
  }
  .form {
    padding: 0 20px;
  }
  .title {
    padding-bottom: 40px;
    margin-bottom: 30px;
    position: relative;
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
    bottom: -7px;
  }
  .title::after {
    content: '';
    position: absolute;
    left: 25px;
    right: 25px;
    bottom: -7px;
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
  .login-button {
    width: 100%;
    height: 65px;
    font-size: 20px;
    line-height: 60px;
    background-color: #3b5bed;
    color: #fff;
    box-shadow: inset 0 -8px 0 0 #273da4;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    position: relative;
    margin: 32px 0 22px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .extra-operations {
    span {
      font-size: 14px;
      color: #909399;
    }
  }
  .error-msg {
    text-align: left;
    color: red;
  }
  .to-join-button {
    cursor: pointer;
  }
}
</style>
