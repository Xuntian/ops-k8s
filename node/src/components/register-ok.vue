<template>
  <div class="login-form">
    <img @click="closeDialog" class="close-btn" src="@/assets/pac/close.png" alt="">
    <h1 class="title">
      恭喜你，报名成功！
    </h1>
    <div class="form">
      <img src="@/assets/pac/flag.png" alt="">
      <p class="error-msg" v-show="loginErrMsg">{{loginErrMsg}}</p>
      <div class="login-button" @click='toUploadWork'>
        去上传作品
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
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
    closeDialog(){
      this.$emit('close')
    },
    toUploadWork(){
        this.$router.push({ path: '/uploadwork' })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  text-align: center;
  padding: 0 28px;
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
    border: 4px solid;
    height: 65px;
    line-height: 50px;
    color: #ffffff;
    font-size: 20px;
    background-color: #0ca6fe;
    // color: #434103;
    border: 4px solid #434103;
    font-weight: bold;
    position: relative;
    margin: 32px 0 22px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .login-button::after {
    content: '';
    width: 100%;
    height: 10px;
    background-color: #0e75af;
    position: absolute;
    left: 0;
    bottom: 0;
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
  .to-join-button{
    cursor: pointer;
  }
}
</style>
