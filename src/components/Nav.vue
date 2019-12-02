<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <!-- 小屏幕导航按钮和logo -->
      <div class="navbar-header">
        <button class="navbar-toggle" data-toggle="collapse" data-target="#daohang">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="javascript:;" class="navbar-brand">LOGO</a>
      </div>
      <!-- 小屏幕导航按钮和logo -->
      <!-- 导航 -->
      <div id="daohang" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">首页</a></li>
          <li><a href="#home">学校概况</a></li>
          <li><a href="#bbs">教学教研</a></li>
          <li><a href="#html5">特色教育</a></li>
          <li><a href="#bootstrap">德育在线</a></li>
          <li><a href="#course">学生天地</a></li>
          <li><a href="#app">招生考试</a></li>
          <li class="dropdown open">
            <a href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              联系我们
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">招生简章</a></li>
              <li><a
                  href="javascript:;">奖学金</a></li>
              <li><a
                  href="javascript:;">招生咨询</a></li>
              <li><a
                  href="javascript:;">在线报名</a></li>
              <li><a
                  href="javascript:;">高考资讯</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 导航 -->
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    // 小屏幕导航点击关闭菜单
    $('.navbar-collapse a').click(function () {
      $('.navbar-collapse').collapse('hide')
    })
    $('.dropdown').mouseover(function () {
      $(this).addClass('open')
    })
    $('.dropdown').mouseleave(function () {
      $(this).removeClass('open')
    })
  }
}
</script>

<style scoped>
.navbar-default{
  height: 70px;
  background: #fff;
}
.navbar-default .navbar-brand {
    font-size: 30px;
    font-weight: bold;
    color: #40D2B1;
    height: 70px;
    line-height: 35px;
}
.navbar-default .navbar-nav > li > a{
  line-height: 35px;
}
.navbar-default .navbar-nav>li>a {
  font-size: 16px;
  color: #777;
  height: 70px;
  line-height: 35px;
}
.nav > li > a {
  padding-left: 8px;
  padding-right: 8px;
}
#daohang {
  background: #fff;
}

#daohang a:hover {
  color: #8d1d2d;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
@media (min-width: 768px) {
  .dropdown-menu {
    min-width: 130px;
    left: 50%;
    margin-left: -65px;
    background-color: rgba(255, 255, 255, 0.9);
  }
}

@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
  }
}
.open>a { background: #fff !important }
</style>
