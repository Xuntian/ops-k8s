<template>
  <footer class="pac-footer">
    <div class="container">
      <ul>
        <li>
          <a href="http://keepwork.com/official/open" target="_blank">开放平台</a>
        </li>
        <li>
          <a href="http://keepwork.com/official/company/joinus" target="_blank">加入我们</a>
        </li>
        <li>
          <a href="http://keepwork.com/wiki/statics" target="_blank">网站统计</a>
        </li>
        <li>
          <a href="http://keepwork.com/intro/keepwork/changelog" target="_blank">更新信息</a>
        </li>
        <li>
          <a href="https://github.com/tatfook/wikicraft/issues" target="_blank">问题反馈</a>
        </li>
        <li>
          <a href="https://github.com/LiXizhi/NPLRuntime/wiki" target="_blank">POWER BY NPL</a>
        </li>
      </ul>
      <p>粤ICP备14002196号-2 © Tatfook</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'CommonFooter'
}
</script>
<style lang="scss">
.pac-footer {
  background-color: #18181a;
  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #303031;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 30px 0 22px;
    list-style: none;
    margin: 0;
  }
  a {
    color: #909399;
    text-decoration: none;
  }
  p {
    text-align: center;
    padding: 20px 0;
    color: #909399;
    margin: 0;
  }
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
}
</style>
<style lang="scss">
@media (max-width: 768px) {
  .pac-footer {
    a {
      font-size: 14px;
    }
    ul {
      padding: 10px 0;
      display: block;
    }
    li {
      display: inline-block;
      padding: 5px 15px;
    }
    p {
      padding: 15px 0;
    }
  }
}
</style>
