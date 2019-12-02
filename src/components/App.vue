<template>
  <section id="app">
    <div class="container">
      <div class="row  wow fadeInUp" data-wow-offset="100">
        <div class="col-md-6">
          <h2>移动APP下载</h2>
          <p>
            全新UI交互，与新网站数据同步，更加丰富的课程，开启精彩无限，语音搜索课程，喊出你想要的课程，一件收藏，方便自己重复学习，离线下载课程，在哪儿都能开！
          </p>
          <button class="btn btn-primary">
            <span class="glyphicon glyphicon-download-alt"></span>
            iPhone版
          </button>
          <button class="btn btn-primary">
            <span class="glyphicon glyphicon-download-alt"></span>
            Android版
          </button>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/app-banner.jpg" class="img-responsive" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  padding: 80px 0;
}
#app h2{
  font-weight: bold;
  padding-bottom: 30px;
}
#app .btn{
  margin: 10px 0;
  background: rgb(64, 210, 177);
  border-color: rgb(64, 210, 177);
  border-radius: 0;
  padding: 6px 30px;
  transition: all 0.3s;
}
#app .btn:hover{
  background: rgb(44, 142, 120);
}
</style>
