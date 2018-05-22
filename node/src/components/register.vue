<template>
  <div class="register-wrap">
    <Header :userinfo='userinfo' @onLogOut='toLogout'></Header>   
    <main>
      <Banner :userinfo='userinfo'></Banner>
      <div class="register-container">
        <div class="container-reg">
          <div class="top-square">
            <div class="white-bg"></div>
            <div class="transparent-bg"></div>
          </div>
          <div class="content">
            <h1 class="title">
              <span><img src="@/assets/pac/fill_reg_info.png" alt=""></span>
            </h1>
            <div class="line"></div>
           <div class="reg_info">
              <form @submit.prevent="register">
                <table width="476px" cellspacing="0">
                  <tr>
                    <td width='850'>姓名</td>
                    <td colspan="2"><input type="text" id="name" class="inputsty" v-model="user_name" placeholder="请输入您的姓名" /></td>
                  </tr>
                  <tr>
                    <td><label for="qq">QQ号码</label></td>
                    <td colspan="2"><input type="text" id="qq" class="inputsty" v-model="qq_no" placeholder="请输入您的QQ号"/></td>
                  </tr>
                  <tr>
                    <td><label for="tel">手机号码</label></td>
                    <td width="80">
                     <el-select class="phone-suffix-select" v-model="value2">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          :disabled="item.disabled">
                        </el-option>
                      </el-select>
                    </td>
                    <td><input type="text" id="tel" class="inputtel" v-model="tel" placeholder="请输入您的手机号码"/></td>
                  </tr>
                  <tr>
                    <td><label for="idcard">身份证件</label></td>
                    <td colspan="2"><input type="text" id="idcard" class="inputsty" v-model="idcard_no" placeholder="请输入您的身份证号码"/></td>
                  </tr>
                </table>
                <p class="hint">提示：信息一旦确认不得修改，如作品获得现金奖需提供与此身份证有关的银行卡方可领奖</p>
                <div class="radio_1">
                  <input type="checkbox" id="isagree" name="agree" v-model="isdisabled"><label for="isagree"></label>同意<span style="color:#5196e7;cursor:pointer;" @click="show_agree">《2018国际智能创意大奖赛比赛协议》</span><br>
                </div>
                <div style="margin:8px auto;text-align:center;color:red" v-show="showerr">{{errmsg}}</div>
                <input type="submit" value="提交信息" :disabled="!_pass" :class="_pass ? 'btnok' : 'btn'">
              </form>
            </div> 
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="registerOkVisible" width='500px' :show-close=false>
        <registerok @close='setDialogVisible("registerOkVisible", false)'></registerok>
      </el-dialog>
      <el-dialog :visible.sync='loginBeforeLogin' width='500px'>
        <p style="text-align: center;">您还没有登录，请先登录</p>
      </el-dialog>
      <el-dialog :visible.sync='show_agreement' width='500px' class="agreement-sty">
        <div>
          <h1 style="text-align:center;">2018国际智能创意大奖赛赛事机制</h1>
       
          <h2>一、大赛简介</h2>
          &nbsp;&nbsp;&nbsp;&nbsp;“国际智能创意大奖赛”（International Intellectual Creation Contest）,简称IICC，是中国首个以自主开发的计算机编程语言NPL为基础，以自主研发的创作软件Pracraft 为工具的科技与文化融合的创新性品牌；是一项由政府、业界、学界共同支持、倾力打造的人工智能产业领域的顶级赛事；是一个以评选原创优秀创意作品和优秀编程作品为载体，旨在激发全民的自主创新意识，培育青少年的基础计算机科学素养，提升青少年的基础计算机思维能力和创新创造能力的国际性权威赛事。IICC 以“创新·合作·开放·协同 ”为原则，倡导“高品质、高品格、高品位”的理念，鼓励自主开发和内容原创，打造精品；宏扬优秀文化，挖掘产业价值；培育人工智能领域顶级技术人才和创意人才，引导和推动人工智能产业的战略升级和科学发展。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;IICC每年举办一次，2018国际智能产业大奖赛在深圳市福田区人民政府的大力支持下，由中国教育台和深圳市大富配天集团共同举办。IICC 面向全球的专业创作团队、技术型创业团队和在校学生征集作品，通过国际化、专业性评委团队评审，评选出百余个奖项，并对获奖者进行表彰，真正培养青少年的科学技术·人工智能的工业童子功，为未来产业升级提供人才储备。
          <h2>二、大赛章程</h2>
          <h3>1.参赛须知</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;1) Paracraft创意空间为指定创作软件，Keepwork官网keepwork.com为大奖赛指定提交作品、发布赛事内容、投票、公布赛事结果的平台。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2) 赛事共分两个组，公开组和学生组，学生组为单项奖专设，所有单项奖都从学生组中产生，符合公开组参赛标准的，可参与公开组奖项评选。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3) 学生组限1996年1月1日后出生的青少年，组委会将根据参赛者提供的身份证信息进行核实。
          大奖赛报名无需任何报名费用，但颁奖典礼的差旅食宿自理。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4) 大奖赛向全球的动画爱好者和编程爱好者开放，不对专业基础做任何硬性要求，参赛者可登陆Keepwork官网学习线上课程或参加线下公开课进行比赛创作工具的操作练习和相关课程学习。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5) 2018国际智能创意大奖赛的主题为“梦想·未来”。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;6) 2018国际智能创意大奖赛的各项赛事信息将通过赛事官网Keepwork.com和“一网乾坤”微信公众号公布，赛事进程及花絮将通过“一网乾坤”微信公众号定期发布，敬请参赛者关注。<br>

          <h3>2.参赛作品要求</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;1) 参赛组别: 公开组、学生组<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2) 作品时长：标准时长10-15分钟，但如果作品只参与学生组单项奖评选，可不限时长，只需提供完整介绍作品的图片（含动态、静态）或者短视频即可。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3) 作品质量要求：用Paracraft制作工作存档投稿，需保证作品可流畅播放，场景、镜头、人物动作没有大的瑕疵。以下每个类型的参赛作品的具体提交要求见附件。<br>

          <h3>3.参赛作品要求</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;1) 不含有（包括文字、语言、场景、背景）与中华人民共和国法律法规相抵触的内容；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2) 不含有或涉及民族歧视、宗教歧视、种族歧视等内容；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3) 不含有色情、暴力等不良内容；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4) 不涉嫌剽窃、侵犯他人著作权；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5) 未在其他公开场合发表或者应用在其他软件中；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;6) 鼓励主题健康，思想性、艺术性和技术水平完美结合的创作；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;7) 鼓励用动画和编程表达的创新精神。<br>
          如有或发现违背以上1-5类行为，该参赛参评作品将被视为无效作品并被取消所有参评资格，参赛者需承担相应的法律责任。<br>

          <h3>4.时间安排</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;1) 赛事启动仪式：2018年5月10号。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2) 大赛报名时间：2018年5月10日—2018年11月30日。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3) 作品提交截止日期：2018年11月30日。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4) 网络投票时间：2018年12月。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5) 初赛时间：2018年12月10日-2018年12月17日。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;6) 决赛时间：2018年12月底，具体日期请留意网站公告。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;7) 颁奖典礼时间：2019年1月，具体日期将于2018年12月发布。<br>

          <h3>5.赛程设置</h3>
              &nbsp;&nbsp;&nbsp;&nbsp;组委会将对公开征集的所有作品进行初筛，筛选出的有效作品（主要侧重作品的完整性和内容的健康性）将进入大奖赛的正式赛程，赛程设三轮。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一轮：网络投票。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二轮：初评——分组、网络评分。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三轮：终评——分组、封闭集体组织现场评定。<br>



          <h3>6.参赛报名及作品提交方法</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;■ 注册报名：<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1) 所有参赛者含参赛团队均须在规定报名截止日期前即2018年11月30日，进行注册和报名，团队参赛由队长注册，但需提交所有组员的身份信息和分工内容；<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2) 登录keepwork.com网站，注册账号<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3) 各项注册信息填完后，点击进入官网“2018国际智能创意大奖赛”栏目，阅读赛事相关信息，按照赛程指导进行报名，须填写上传完整真实的报名信息及个人/团队身份资料（公开组含：姓名、出生年月日、性别、QQ号码、邮箱、位置、电话、身份证号码/  学生组含：姓名、出生年月日、性别、QQ号码、邮箱、位置、电话、身份证号码、身份证复印件大小100K以内、学校）。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4) 完成报名后，点击下载指定制作软件《Paracraft创意空间》。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5) 软件下载完毕后，已注册的keepwork账号密码（可勾选记住密码和自动登陆），随后可进行自由创作。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;6) 根据自身经验和基础，选择线上课程，完成课程学习。  <br>  
          &nbsp;&nbsp;&nbsp;&nbsp;■ 作品提交：<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1) 提交身份证明材料。个人参赛提交身份证扫描件（JPG格式，大小不超过100K），团队参赛需提交队长身份扫描件1份（JPG格式，大小不超过100K）及团队人员合照1份（JPG格式1024*768以上）。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2) 提交作品和插件，以工作文档/脚本/视频形式提交，其中，编程类以https://github.com/源代码链接 + MOD安装包+视频的形式提交。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3) 提交500字以内作品简介，含创意阐述、创作背景和创作目的。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4) 选择组别后勾选参加评奖项完成作品提交（每人最多可参加三项评奖；参加公开组的人群不可参加学生组评奖，参加学生组的人群可参评公开组奖项）<br>
          以上材料均为在线提交，当系统显示提交成功后，视为参赛成功，参赛者方可关闭网页或者直接退出。

          <h3>7.结果公布及奖金发放</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;入选名单公告以2018国际智能创意大奖赛官网keepwork.com为准。2019年（具体日期待定）2018国际智能创意大奖赛颁奖典礼为《2018国际智能创意大奖赛获奖作品名单》唯一指定发布平台，届时将举办颁奖典礼，向获奖者颁发证书及奖金。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;所有奖项的奖金将分为奖励基金+学习基金+培育基金三大部分，有针对性的对获奖作者进行奖励。

          <h3>8.作品版权</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;2018国际智能创意大奖赛参赛作品必须由参赛者本人参与创作，联合作者可联名报名参赛或将该作品版权授予参赛者行使，参赛者应确认拥有其作品的完全著作权，同时保证提交作品中所采用的音乐及剧本创意等已获得版权，或取得该作品版权人授权使用。2018国际智能创意大奖赛组委会不承担因版权问题而产生的各类法律责任，其法律责任由参赛者本人承担。如参赛作品版权存在纠纷或争议，组委会保留取消其参赛资格及追回奖项奖品的权利。

          <h3>9.宣传许可</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;参赛者须授权组委会剪辑其参赛作品作为2018国际智能创意大奖赛当前或未来宣传节目的一部分，在电影院、电视频道、互联网、手机电视和公众场所展览展映、采访或宣传片中使用。剪辑片段不超过参赛作品总时长的15%，最长不超过3分钟，短片片段授权使用期限默认为1年，期限到期时，如无特别声明，则视为短片片段使用期限自动延长1年。

          <h3>10.参赛作品撤回</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;参赛者一旦参赛，则视为同意本章程的各项条款，凡入围2018国际智能创意大奖赛评选环节的作品不得以任何理由擅自撤回。

          <h3>11.未尽事宜</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;如发生诉讼案例，提交中国广东省深圳市法院裁判。

          <h3>12.解释权</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;本章程最终解释权归2018国际智能创意大奖赛组委会所有。<br>
          <br>
          <br>
          <br>
          <br>
          <div style="text-align:right;">
          2018国际智能创意大奖赛组委会<br>
          2018年4月29日
          </div>
        </div>
      </el-dialog>
    </main> 
    <Footer></Footer>    
  </div>
</template>
<script>
import Header from "./common/header";
import Banner from "./common/banner";
import Footer from "./common/footer";
import registerok from "./register-ok";
import "element-ui/lib/theme-chalk/display.css";
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      options: [
        {
          value: "+86",
          label: "+86"
        },
        {
          value: "+87",
          label: "+87",
          disabled: true
        },
        {
          value: "+88",
          label: "+88"
        },
        {
          value: "+89",
          label: "+89"
        }
      ],
      loginBeforeLogin: false,
      userinfo: JSON.parse(localStorage.getItem('userinfo')),
      show_agreement: false,
      registerOkVisible: false,
      showerr: false,
      errmsg: "",
      value2: "+86",
      isdisabled: false,
      user_name: "太阳",
      qq_no: "2307898877",
      tel: "15767899874",
      idcard_no: "431189677545633454"
    };
  },
  computed: {
    _pass: function() {
      if (
        this.user_name &&
        this.qq_no &&
        this.tel &&
        this.idcard_no &&
        this.isdisabled
      ) {
        return true;
      }
      return false;
    }
  },
  components: {
    Header,
    Banner,
    Footer,
    registerok
  },
  methods: {
    show_agree() {
      this.show_agreement = true;
    },
    setDialogVisible(key, value) {
      this[key] = value;
    },
    toLogout() {
      this.userinfo = undefined;
      localStorage.removeItem("userinfo");
    },
    register() {
      if (!/^[1-9][0-9]{4,13}$/.test(this.qq_no)) {
        this.showerr = true;
        this.errmsg = "qq号错误";
        return false;
      } else if (!/^1\d{10}$/.test(this.tel)) {
        this.showerr = true;
        this.errmsg = "手机号码错误";
        return false;
      } else if (
        !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.idcard_no)
      ) {
        this.showerr = true;
        this.errmsg = "身份证不正确";
        return false;
      } else if (!localStorage.getItem("userinfo")) {
        this.loginBeforeLogin = true;
      } else {
        let that = this;
        let authorization =
          "bearer " + JSON.parse(localStorage.getItem("token"));
        axios
          .create({
            baseURL: "http://keepwork.com/api/wiki/models",
            headers: { Authorization: authorization }
          })
          .post("website_member/submitMemberApply", {
            websiteId: "5",
            username: JSON.parse(localStorage.getItem("userinfo")).username,
            portrait: "",
            sex: "",
            realname: this.user_name,
            email: "",
            QQId: this.qq_no,
            cellphoneId: this.value2 + this.tel,
            identifyCardId: this.idcard_no
          })
          .then(function(result) {
            console.log(result);
            console.log(JSON.parse(localStorage.getItem("userinfo")).username);
            localStorage.setItem('realname', that.user_name);
            that.showerr = false;
          })
          .catch(function(error) {});
        this.registerOkVisible = true;
        return true;
      }
    }
  }
};
</script>
<style lang="scss">
.register-wrap {
  .agreement-sty .el-dialog__body {
    height: 800px;
    overflow-y: scroll;
  }
  .radio_1 [type="checkbox"] {
    display: none;
  }
  .radio_1 {
    font-size: 14px;
    label {
      margin-right: 10px;
      display: inline-block;
      position: relative;
      top: 5px;
      width: 16px;
      height: 16px;
      border: 3px #c0c1c1 solid;
      background-color: #fff;
      cursor: pointer;
    }
    label::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      background-color: #c0c1c1;
      cursor: pointer;
      transform: scale(0);
      transition: transform 0.2s ease-out;
    }
    [type="checkbox"]:checked + label {
      border: 3px #303133 solid;
      background-color: #eee;
      transition: background-color 0.2s ease-in;
    }
    [type="checkbox"]:checked + label::after {
      background-color: #303133;
      transform: scale(1);
      transition: transform 0.2s ease-out;
    }
  }

  .register-container {
    background-color: #f5f5f5;
    .container-reg {
      width: 100%;
      max-width: 1080px;
      margin: 0 auto;
      .content {
        position: relative;
        background-color: #ffffff;
        top: -90px;
        padding: 0 105px 40px;
        border: 1px solid transparent;
      }
    }
  }
  .content::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 20px;
    background-color: transparent;
    background-size: 20px 20px;
    background-image: repeating-linear-gradient(
      -45deg,
      white,
      white 5.6px,
      #d8d8d8 5.6px,
      #d8d8d8 6.1px,
      #3b3b3b 6.1px,
      #3b3b3b 6.6px,
      #d8d8d8 7.1px
    );
  }
  .top-square {
    display: flex;
    position: relative;
    top: -90px;
    height: 40px;
    .white-bg {
      background-color: #fff;
      flex: 1;
    }
    .transparent-bg {
      width: 40px;
      background-color: transparent;
      position: relative;
    }
    .transparent-bg::before {
      content: "";
      display: inline-block;
      width: 40px;
      height: 27px;
      background-color: #fff;
      position: absolute;
      left: 15px;
      bottom: 25px;
      box-shadow: 0px 10px 0px 0px #afafaf;
    }
    .transparent-bg::after {
      content: "";
      display: inline-block;
      width: 40px;
      height: 27px;
      background-color: #fff;
      position: absolute;
      left: 55px;
      bottom: -12px;
      box-shadow: 0px 10px 0px 0px #afafaf;
    }
  }
  .line {
    height: 8px;
    margin: 20px auto;
    position: relative;
  }
  .line::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 8px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #cfcfcf;
  }
  .line::after {
    content: "";
    display: inline-block;
    height: 8px;
    position: absolute;
    left: 20px;
    right: 20px;
    border: 15px solid #fff;
    border-width: 0 15px;
    top: 0;
    background-color: #cfcfcf;
  }
  .title {
    text-align: center;
  }
  .reg_info {
    width: 476px;
    margin: 0 auto;
    .hint {
      color: #ec2828;
      font-size: 14px;
      text-align: left;
    }
    .btn {
      background-color: rgb(144, 147, 153);
      display: block;
      color: #ffffff;
      border: none;
      width: 364px;
      height: 60px;
      font-size: 20px;
      margin: 34px auto;
      box-shadow: inset 0px -8px 0px 0px rgb(81, 85, 92);
    }
    .btnok {
      background-color: rgb(59, 91, 237);
      display: block;
      color: #ffffff;
      border: none;
      width: 364px;
      height: 60px;
      font-size: 20px;
      border-radius: 4px;
      margin: 34px auto;
      box-shadow: inset 0px -8px 0px 0px rgb(9, 20, 138);
    }
  }
  .reg_info tr {
    height: 48px;
    line-height: 48px;
  }
  .inputsty {
    width: 368px;
  }
  .phone-suffix-select .el-input__inner {
    border-radius: 0;
  }
  .smallinput {
    width: 38px;
  }
  .reg_info tr td {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    color: #303133;
    input {
      border-radius: 0;
      background-color: #efefef;
      border: none;
      height: 48px;
      font-size: 14px;
      padding: 0 5px 0 18px;
      margin: 8px 0;
    }
    input:focus {
      outline: none;
    }
    .inputtel {
      width: 278px;
      margin-left: 8px;
    }
  }
  .slash {
    height: 20px;
    border: 1px solid red;
  }
}
</style>

