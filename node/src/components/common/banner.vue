<template>
  <div class="banner">
    <img class="bg" src="@/assets/pac/banner.jpg" alt="">
    <div class="codes">
      <pre class="code-block1">
        -- generate a random tree
        local function random(min_value, max_value)
            return math.random()*(max_value - min_value);
        end

        scale(1/5)
        math.randomseed(12345678);
        make_tree(6, 4, 0.5, 0.3);
      </pre>
      <pre class="code-block2 hidden-xs-only">
        function CreateCylinders()
          push()
              translate(0, height - outer_radius, 0)
              difference()
                  cylinder({
                    from = {0,0,0}, 
                    to = {clinder_length,0,0}, 
                    r1 = outer_radius, 
                    r2 = outer_radius
                  });
                  cylinder({
                    from = {0,0,0}, 
                    to = {clinder_length,0,0}, 
                    r1 = inner_radius, 
                    r2 = inner_radius
                  });
          pop()
        end
      </pre>
      <pre class="code-block3 hidden-xs-only">
        -- generate a random tree
        local function random(min_value, max_value)
            return min_value + max_value - min_value;
        end
        difference()
        color({1,0,0});
        cube({size=3,center = true});
        color({0,0,1});
        sphere({r = 2});
      </pre>
    </div>
    <div class="container">
      <div class="banner-content">
        <img src="@/assets/pac/banner-title.png" alt="">
        <div class="buttons">
          <img @click="toApply" class="img-btn" src="@/assets/pac/button-join.png" alt="">
          <a href="http://www.paracraft.cn/download?lang=zh" target="_blank" class="img-btn">
            <img src="@/assets/pac/button-download.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="loginDialogVisible" width='500px' :show-close=false custom-class="login-dialog" :append-to-body=true>
      <login @close='setDialogVisible("loginDialogVisible", false)' @showJoinDialog='setDialogVisible("joinDialogVisible", true)' @onLogined='onLogined'></login>
    </el-dialog>
    <el-dialog :visible.sync="joinDialogVisible" width='500px' :show-close=false custom-class="join-dialog" :append-to-body=true>
      <join @close='setDialogVisible("joinDialogVisible", false)' @showLoginDialog='setDialogVisible("loginDialogVisible", true)' @onLogined='onLogined'></join>
    </el-dialog>
    <el-dialog :visible.sync='applyDialogVisible' width='500px'>
      <h1>报名</h1>
      <p>报名功能开发中， 敬请期待</p>
    </el-dialog>
  </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/display.css'
import login from '../login'
import join from '../join'
export default {
  name: 'CommonBanner',
  components: {
    login,
    join
  },
  props: {
    userinfo: Object
  },
  data() {
    return {
      loginDialogVisible: false,
      joinDialogVisible: false,
      applyDialogVisible: false,
      isLogined: this.userinfo ? true : false
    }
  },
  methods: {
    setDialogVisible(key, value) {
      this[key] = value
    },
    toApply() {
      if (this.userinfo) {
        this.applyDialogVisible = true
        return
      }
      this.loginDialogVisible = true
    },
    onLogined() {
      this.loginDialogVisible = false
      this.joinDialogVisible = false
      this.$emit('onLogined')
    }
  }
}
</script>
<style lang="scss">
.login-dialog, .join-dialog{
  max-width: 90%;
}
.banner {
  height: 625px;
  position: relative;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  pre {
    color: #fff;
    position: absolute;
    opacity: 0.4;
  }
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  .codes {
    z-index: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .code-block1 {
    color: #e8cf00;
    left: 0;
    bottom: -150px;
    animation: blockAnimate 14s infinite;
    animation-timing-function: linear;
  }
  .code-block2 {
    left: 30%;
    bottom: -270px;
    animation: blockAnimate2 14s infinite;
    animation-delay:6s;
    animation-timing-function: linear;
    color: #e86800;
  }
  .code-block3 {
    right: 5%;
    bottom: -200px;
    animation: blockAnimate3 14s infinite;
    animation-delay:2s;
    animation-timing-function: linear;
    color: #009fe8;
  }
  @keyframes blockAnimate {
    from {
      bottom: -150px;
    }
    to {
      bottom: 570px;
    }
  }
  @keyframes blockAnimate2 {
    from {
      bottom: -270px;
    }
    to {
      bottom: 570px;
    }
  }
  @keyframes blockAnimate3 {
    from {
      bottom: -200px;
    }
    to {
      bottom: 570px;
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-content {
    padding-top: 110px;
    text-align: center;
  }
  .buttons {
    margin-top: 46px;
  }
  .img-btn {
    cursor: pointer;
    margin-right: 30px;
  }
  .img-btn:last-child {
    margin-right: 0;
  }
}
</style>
<style lang="scss">
@media (max-width: 768px) {
  .banner {
    height: 460px;
    background-image: url('../../assets/pac/banner.jpg');
    background-size: auto 100%;
    background-position: 82%;
    pre{
      font-size: 12px;
    }
    .banner-content {
      padding-top: 20px;
      img {
        width: 290px;
        margin-top: 45px;
      }
    }
    .bg {
      object-position: right;
    }
    .buttons {
      text-align: center;
      margin-top: 52px;
      img {
        width: 200px;
        margin: 0 0 10px 15px;
      }
    }
  }
}
</style>