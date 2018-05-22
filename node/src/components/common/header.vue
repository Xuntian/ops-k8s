<template>
  <header class="pac-header">
    <div class="container clearfix">
      <div class="brand">
        <img src="@/assets/pac/logo.png" alt="">
      </div>
      <ul class="hidden-xs-only clearfix">
        <li :class="{'active': activeRoutePage ==='index'}">
          <a href='/'>首页</a>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="暂未开放，敬请期待" placement="top">
            <span class="disabled-link">参赛作品</span>
          </el-tooltip>
          <!-- <a href='#'>参赛作品</a> -->
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="暂未开放，敬请期待" placement="top">
            <span class="disabled-link">活动专区 <img src="@/assets/pac/bottom-dot.png" alt=""></span>
          </el-tooltip>
          <!-- <el-dropdown placement='bottom'>
            <span class="el-dropdown-link">
              活动专区
              <img src="@/assets/pac/bottom-dot.png" alt="">
            </span>
            <el-dropdown-menu class="header-dropdown" slot="dropdown">
              <el-dropdown-item>
                <a href="#">公开课</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">校园活动</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">主题长廊</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">人物访谈</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">版权交易</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">颁奖典礼</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">作品展示</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="暂未开放，敬请期待" placement="top">
            <span class="disabled-link">课程学习</span>
          </el-tooltip>
          <!-- <a href='#'>课程学习</a> -->
        </li>
        <li>
          <a href='http://www.paracraft.cn/download?lang=zh' target="_blank">相关下载</a>
        </li>
        <li class="join-btn" @click="toApply"><img src="@/assets/pac/camera.png" alt="">我要报名</li>
        <li class="profile" v-if="userinfo && userinfo.portrait">
          <el-dropdown placement='bottom' trigger='click'>
            <span class="el-dropdown-link">
              <img class="profile-img" :src='userinfo.portrait' alt="">
              <img src="@/assets/pac/bottom-dot.png" alt="">
            </span>
            <el-dropdown-menu class="header-dropdown" slot='dropdown'>
              <el-dropdown-item>
                <a href="#">我的资料</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">我的作品</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native='toLogout'>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
      <el-dropdown class="hidden-sm-and-up xs-dropdown" placement='bottom-end' @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu class="header-dropdown xs-dropdown-menu" slot="dropdown">
          <el-dropdown-item>
            <a href="#">首页</a>
          </el-dropdown-item>
          <!-- <el-dropdown-item>
            <a href="#">参赛作品</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">公开课</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">校园活动</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">主题长廊</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">人物访谈</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">版权交易</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">颁奖典礼</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">作品展示</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">课程学习</a>
          </el-dropdown-item> -->
          <el-dropdown-item>
            <a href="http://www.paracraft.cn/download?lang=zh">相关下载</a>
          </el-dropdown-item>
          <el-dropdown-item command='apply'>
            我要报名
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog :visible.sync="loginDialogVisible" width='500px' :show-close=false custom-class="login-dialog" :append-to-body=true>
      <login @close='setDialogVisible("loginDialogVisible", false)' @showJoinDialog='setDialogVisible("joinDialogVisible", true)' @onLogined='onLogined'></login>
    </el-dialog>
    <el-dialog :visible.sync="joinDialogVisible" width='500px' custom-class="join-dialog" :show-close=false :append-to-body=true>
      <join @close='setDialogVisible("joinDialogVisible", false)' @showLoginDialog='setDialogVisible("loginDialogVisible", true)' @onLogined='onLogined'></join>
    </el-dialog>
    <el-dialog :visible.sync='applyDialogVisible' width='500px'>
      <h1>报名</h1>
      <p>报名功能开发中， 敬请期待</p>
    </el-dialog>
  </header>
</template>
<script>
import login from '../login'
import join from '../join'
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'CommonHeader',
  components: {
    login,
    join
  },
  data() {
    return {
      loginDialogVisible: false,
      joinDialogVisible: false,
      applyDialogVisible: false,
      activeRoutePage: this.$route.name,
      isLogined: this.userinfo ? true : false
    }
  },
  props: {
    userinfo: Object
  },
  methods: {
    setDialogVisible(key, value) {
      this[key] = value
    },
    toApply() {
      if (this.userinfo) {
        this.$router.push({ path: '/register' })
        // this.applyDialogVisible = true
        return
      }
      this.loginDialogVisible = true
    },
    toLogout() {
      this.$emit('onLogOut')
    },
    onLogined() {
      this.loginDialogVisible = false
      this.joinDialogVisible = false
      this.$emit('onLogined')
    },
    handleCommand(type) {
      switch (type) {
        case 'apply':
          this.toApply()
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss">
.login-dialog,
.join-dialog {
  max-width: 90%;
}
.header-dropdown.el-popper {
  margin-top: 0;
  border: none;
  border-radius: 0;
  padding: 5px 0;
  background-color: #303133;
  a {
    color: #fff;
    text-decoration: none;
  }
  .popper__arrow::after {
    border-bottom-color: #303133;
  }
  .el-dropdown-menu__item {
    padding: 0 27px;
    color: #fff;
  }
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #181619;
    color: #fff;
  }
}
.pac-header {
  height: 70px;
  line-height: 48px;
  padding: 11px 0;
  box-sizing: border-box;
  .brand {
    float: left;
    top: -3px;
    position: relative;
  }
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
  img {
    vertical-align: middle;
  }
  ul {
    float: right;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    float: left;
    padding: 0 24px;
  }
  a {
    color: #606266;
    text-decoration: none;
  }
  a:hover {
    color: #303133;
    font-weight: bold;
  }
  .join-btn {
    background-color: #253994;
    color: #fff;
    font-weight: bold;
    margin-left: 24px;
    border-radius: 4px;
    padding: 0 20.5px;
    font-size: 15px;
    cursor: pointer;
    img {
      margin-right: 10px;
      vertical-align: middle;
      top: -2px;
      position: relative;
    }
  }
  .profile {
    // display: none;
    .profile-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .el-dropdown {
    font-size: 16px;
    cursor: pointer;
  }
  .disabled-link {
    cursor: not-allowed;
    color: #606266;
  }
  li.active a {
    font-weight: bold;
    color: #303133;
    position: relative;
  }
  li.active a::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: #253994;
  }
}
</style>
<style lang="scss">
@media (max-width: 768px) {
  .pac-header {
    padding: 8px 15px;
    .xs-dropdown {
      float: right;
      font-size: 28px;
    }
  }
}
</style>
