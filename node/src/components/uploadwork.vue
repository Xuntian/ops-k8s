<template>
  <div class="uploadwork-wrap">
    <Header @onLogOut='toLogout'></Header>   
    <main>
      <Banner></Banner>
      <div class="intro-row-reg">
        <div class="container-reg">
          <div class="top-square-uploadpage">
            <div class="white-bg"></div>
            <div class="transparent-bg"></div>
          </div>
          <div class="content">
            <h1 class="title">
              <span><img src="@/assets/pac/upload_work.png" alt=""></span>
            </h1>
            <div class="line"></div>
           <div class="reg_info">
              <form @submit.prevent="uploadwork">
                <table class="uploadwork_table">
                  <tr class="groups">
                    <td width='94'>参赛组别</td>
                    <td>
                      <input type="radio" id="radio_1" name="group_name" v-model="picked" value="3"/><label for="radio_1"></label><span :class="picked == 1 ? 'group_name_sel' : 'group_name'" >学生组</span>
                      <input type="radio" id="radio_2" name="group_name" v-model="picked" value="4"/><label for="radio_2"></label><span :class="picked == 2 ? 'group_name_sel' : 'group_name'" >公开组</span>
                    </td>
                  </tr>
                  <tr>
                    <td>作品名称</td>
                    <td><input type="text" v-model="work_title" placeholder="请输入您的作品名称"/></td>
                  </tr>
                  <tr>
                    <td>作品简介</td>
                    <td><input type="text" v-model="work_brief" placeholder="请输入作品简介"/></td>
                  </tr>
                  <tr>
                    <td>学校名称</td>
                    <td><input type="text" v-model="school_name" placeholder="请输入您的学校全名"/></td>
                  </tr>
                  <tr>
                    <!-- <td colspan="2">
                      <div class="idcard">
                        <div class="idcard-type">作品封面</div>
                        <div class="clicktoup clicktoup2">
                          <div class="add-center">
                            <div class="add-icon">
                              <div class="add"></div>
                            </div>
                            点击上传
                          </div>
                          <div class="input_file"><input type="file"></div>
                        </div>
                      </div>
                    </td> -->
                    <td colspan="2">
                      <div class="up_pic">
                        <div class="idcard">
                          <div class="idcard-type">作品封面</div>
                          <div class="clicktoup clicktoup2">
                            <div class="add-center">
                              <div class="add-icon">
                                <div class="add"></div>
                              </div>
                              点击上传
                            </div>
                            <!-- <div class="input_file"><input type="file"></div> -->
                          </div>
                          <div class="preview-location">
                            <div class="tip">(一张JPG格式，分辨率1024*768以上)</div> 
                            <div class="preview">预览区域</div>
                          </div>
                        </div>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>选择作品</td>
                    <td class="compete_works">
                      <el-select id="my-compete-works" v-model="value2">
                        <el-option
                          v-for="item in myworks"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          :disabled="item.disabled">
                        </el-option>
                      </el-select>
                    </td>
                  </tr>
                  <tr class="select_items">
                    <td><div>报名奖项</div></td>
                    <td>
                      <div class="item_wrap">
                        <div>
                          <p v-for="(item,index) in awards_item" :key="index" v-if="index < 3"><input type="checkbox" :id="`checkbox_${index}`" v-model="checked_item[index]"><label :for="`checkbox_${index}`"></label><span :class="checked_item[index] ? 'group_name_sel' : 'group_name'">{{item}}</span></p>
                        </div>
                        <div>
                          <p v-for="(item,index) in awards_item" :key="index" v-if="index >= 3"><input type="checkbox" :id="`checkbox_${index}`" v-model="checked_item[index]"><label :for="`checkbox_${index}`"></label><span :class="checked_item[index] ? 'group_name_sel' : 'group_name'">{{item}}</span></p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <!-- <td colspan="2">
                      <div class="idcard">
                        <div class="idcard-type">身份证复印件/扫描件</div>
                        <div class="clicktoup">
                          <div class="add-center">
                            <div class="add-icon">
                              <div class="add"></div>
                            </div>
                              点击上传
                          </div>
                          <div class="input_file"><input type="file"></div>
                        </div>
                      </div>
                    </td> -->
                    <td colspan="2">
                      <div class="up_pic">
                        <div class="idcard">
                          <div class="idcard-type">身份证复印件/扫描件</div>
                          <div class="clicktoup">
                            <div class="add-center">
                              <div class="add-icon">
                                <div class="add"></div>
                              </div>
                              点击上传
                            </div>
                            <!-- <div class="input_file"><input type="file"></div> -->
                          </div>
                          <div class="preview-location">
                            <div class="tip">&nbsp;</div> 
                            <div class="preview">预览区域</div>
                          </div>
                        </div>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog>
                      </div>
                    </td>

                  </tr>
                  <!-- <tr> -->
                    <!-- <td colspan="2"><div class="preview">预览区域</div></td> -->
                  <!-- </tr> -->
                  <tr>
                    <td colspan="2">
                      <div class="up_pic">
                        <div class="idcard">
                          <div class="idcard-type">生活照</div>
                          <div class="clicktoup clicktoup2">
                            <div class="add-center">
                              <div class="add-icon">
                                <div class="add"></div>
                              </div>
                              点击上传
                            </div>
                            <!-- <div class="input_file"><input type="file"></div> -->
                          </div>
                          <div class="preview-location">
                            <div class="tip">(一张JPG格式，分辨率1024*768以上)</div> 
                            <div class="preview">预览区域</div>
                          </div>
                        </div>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog>
                      </div>
                    </td>
                  </tr>
                </table>
                <input type="submit" value="提交信息" :disabled="!_pass" :class="_pass ? 'btnok' : 'btn'">
              </form>
            </div> 
          </div>
        </div>
      </div>  
      <el-dialog :visible.sync='uploadworkVisible' width='500px'>
        <p>提交作品出错了</p>
      </el-dialog>
    </main> 
    <Footer></Footer>    
  </div>
</template>
<script>
import Header from "./common/header";
import Banner from "./common/banner";
import Footer from "./common/footer";
import "element-ui/lib/theme-chalk/display.css";
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      myworks: [
        {
          value: "1",
          label: "1太阳"
        },
        {
          value: "2",
          label: "2星星",
          disabled: true
        },
        {
          value: "3",
          label: "3月亮"
        },
        {
          value: "4",
          label: "4云朵"
        }
      ],
      picked: 0,
      checked_item: [false, false, false, false, false, false],
      awards_item: [
        "NPL 大奖",
        "NPL 最佳编辑奖",
        "NPL 最佳教程奖",
        "NPL 最佳场景设置奖",
        "NPL 3D角色制作奖",
        "NPL 最佳开源贡献奖"
      ],
      work_title: "太阳花",
      work_brief: "一朵有能量的花",
      school_name: "xxx大学",
      value2: "选择您要比赛的作品",
      uploadworkVisible: false,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  computed: {
    already_checked_item: function() {
      for (let i = 0; i < this.checked_item.length; i++) {
        if (this.checked_item[i]) {
          return true;
        }
      }
      return false;
    },
    _pass: function() {
      if (
        this.work_title &&
        this.picked &&
        this.work_brief &&
        this.school_name &&
        this.value2 != "选择您要比赛的作品" &&
        this.already_checked_item
      ) {
        return true;
      }
      return false;
    },
    awords: function() {
      let tempArr = [];
      for (let i = 0; i < this.checked_item.length; i++) {
        if (this.checked_item[i]) {
          tempArr.push(this.awards_item[i]);
        }
      }
      return tempArr.join();
    }
  },
  components: {
    Header,
    Banner,
    Footer
  },
  methods: {
    toLogout() {
      this.userinfo = undefined;
      localStorage.removeItem("userinfo");
    },
    uploadwork() {
      console.log(this.awords);
      if (!this.work_title) {
        this.uploadworkVisible = true;
        return false;
      } else {
        let that = this;
        let authorization =
          "bearer " + JSON.parse(localStorage.getItem("token"));
        axios
          .create({
            baseURL: "http://keepwork.com/api/wiki/models",
            headers: { Authorization: authorization }
          })
          .post("website_works/submitWorksApply", {
            websiteId: "5",
            username: JSON.parse(localStorage.getItem("userinfo")).username,
            realname: localStorage.getItem("realname"),
            worksName: this.work_title,
            worksDesc: this.work_brief,
            worksLogo: "",
            worksFlag: this.picked,
            worksUrl: "", //作品地址
            schoolName: this.school_name,
            awords: this.awords, //奖项
            identifyUrl: "",
            liveUrl: "",
            visitCount: "",
            voteCount: "",
            todayVoteCount: "",
            commentCount: ""
          })
          .then(function(result) {
            console.log(result);
            console.log(JSON.parse(localStorage.getItem("userinfo")).username);
            that.showerr = false;
          })
          .catch(function(error) {
            console.log(err);
          });

        return true;
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.uploadwork-wrap {
  .reg_info .uploadwork_table {
    .group_name {
      color: rgba(48, 49, 51, 0.5);
      font-size: 14px;
    }
    .group_name_sel {
      color: #303133;
      font-size: 14px;
    }
    tr td {
      padding: 10px 0;
      input {
        border-radius: 0;
        width: 372px;
        margin: 0 0 0 9px;
        padding-left: 14px;
        height: 48px;
      }
    }
  }

  .reg_info .uploadwork_table .work_face {
    border-radius: 50px;
  }
  .uploadwork_table .groups {
    label {
      margin-left: 30px;
    }
    td [type="radio"] {
      display: none;
    }
    td label {
      margin-right: 10px;
      display: inline-block;
      position: relative;
      top: 3px;
      width: 16px;
      height: 16px;
      border: 3px #c0c1c1 solid;
      background-color: #fff;
      cursor: pointer;
    }
    td label::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      cursor: pointer;
      transform: scale(0);
      transition: transform 0.2s ease-out;
    }
    td [type="radio"]:checked + label {
      border: 3px #303133 solid;
      background-color: #eee;
      transition: background-color 0.2s ease-in;
    }
    td [type="radio"]:checked + label::after {
      background-color: #303133;
      transform: scale(1);
      transition: transform 0.2s ease-out;
    }
  }

  // 奖项选择
  .uploadwork_table .select_items {
    .item_wrap {
      display: flex;
      div {
        flex: 1;
        height: 120px;
        padding-left: 6px;
      }
    }
    div {
      flex: 1;
      height: 120px;
    }

    p {
      margin: 0;
      height: 40px;
    }
  }
  .uploadwork_table .select_items td [type="checkbox"] {
    display: none;
  }
  .uploadwork_table .select_items td label {
    margin-right: 10px;
    display: inline-block;
    position: relative;
    top: 3px;
    width: 14px;
    height: 14px;
    border: 2px #c0c1c1 solid;
    background-color: #fff;
    cursor: pointer;
  }
  .uploadwork_table .select_items td label::after {
    content: "";
    position: absolute;
    top: 0;
    left: 1px;
    width: 9px;
    height: 5px;
    border: 2px solid #303133;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    cursor: pointer;
    transform: rotate(-55deg);
    visibility: hidden;
  }
  .uploadwork_table .select_items td [type="checkbox"]:checked + label {
    border: 2px #303133 solid;
    background-color: #eee;
    transition: border 0.2s ease-in;
  }
  .uploadwork_table .select_items td [type="checkbox"]:checked + label::after {
    visibility: visible;
    transition: visibility 0.2s ease-out;
  }
  .intro-row-reg {
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
  .top-square-uploadpage {
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
    .btn {
      background-color: rgb(144, 147, 153);
      display: block;
      color: #ffffff;
      border: none;
      width: 360px;
      height: 50px;
      font-size: 20px;
      margin: 34px auto;
      box-shadow: inset 0px -8px 0px 0px rgb(81, 85, 92);
    }
    .btnok {
      background-color: rgb(59, 91, 237);
      display: block;
      color: #ffffff;
      border: none;
      width: 360px;
      height: 50px;
      font-size: 20px;
      margin: 34px auto;
      box-shadow: inset 0px -8px 0px 0px rgb(9, 20, 138);
    }
  }
  .reg_info tr {
    height: 48px;
    line-height: 48px;
  }
  .smallinput {
    width: 38px;
  }
  .inputtel {
    width: 234px;
  }
  .reg_info tr td {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    .sel_work {
      width: 391px;
      margin-left: 10px;
      height: 48px;
      border: 0;
    }
  }

  .reg_info tr td input {
    background-color: #efefef;
    border: none;
    height: 36px;
    border-radius: 6px;
    padding: 0 5px;
    font-size: 14px;
  }
  .idcard {
    display: flex;
    margin-bottom: 20px;
    height: 200px;
    .idcard-type {
      flex: 1;
    }
    .clicktoup {
      width: 313px;
      height: 48px;
      background-color: #efefef;
      text-align: center;
      color: #606266;
      position: relative;
      border-radius: 24px;
      .input_file {
        position: absolute;
        top: -15px;
        left: -10px;
        opacity: 0;
      }
    }
    .clicktoup2 {
      width: 391px;
    }
    .preview-location {
      position: absolute;
      top: 50px;
      width: 389px;
      .tip {
        font-size: 12px;
        padding:8px 90px;
        color: #606266;
        line-height: 12px;
      }
      .preview {
        text-align: center;
        line-height: 146px;
        width: 273px;
        height: 144px;
        color: #606266;
        background-color: rgba(239, 239, 239, 0.3);
        border: 2px dashed rgba(0, 0, 0, 0.3);
        .del {
          position: absolute;
          top: -54px;
          right: 4px;
        }
      }
    }
  }
  .add-center {
    width: 78px;
    height: 48px;
    line-height: 48px;
    text-align: right;
    margin: 0 auto;
    position: relative;
    font-size: 14px;
    .add-icon {
      position: absolute;
      top: 12px;
    }
  }
  .add {
    width: 18px;
    height: 18px;
    border: 2px solid #444444;
    border-radius: 100%;
    position: relative;
  }
  .add::before {
    content: "";
    width: 12px;
    height: 2px;
    background-color: #444444;
    position: absolute;
    top: 8px;
    left: 3px;
  }
  .add::after {
    content: "";
    width: 2px;
    height: 12px;
    background-color: #444444;
    position: absolute;
    top: 3px;
    left: 8px;
  }
}
</style>
<style lang="scss">
.uploadwork-wrap {
  .uploadwork_table .compete_works .el-input {
    margin-left: 10px;
    background-color: #efefef;
    .el-input__inner {
      border-radius: 0;
      border: 0;
      width: 381px;
      height: 48px;
      background-color: #efefef;
    }
  }
  .up_pic {
    position: relative;
    .el-upload {
      position: absolute;
      top: 0;
      left: 90px;
      width: 380px;
      height: 48px;
      opacity: 0;
      i {
        display: none;
      }
    }
    .el-upload-list {
      .el-upload-list__item {
        width: 270px;
        height: 148px;
        border: 2px dashed rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>


