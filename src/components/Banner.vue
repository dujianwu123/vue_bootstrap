<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- 指示器 -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    </ol>

    <!-- 轮播图片及说明文字 -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img width="100%" src="../assets/images/1.jpg" alt="图片1">
        <div class="carousel-caption">
        </div>
      </div>
      <div class="item">
        <img width="100%" src="../assets/images/2.jpg" alt="图片2">
        <div class="carousel-caption">
        </div>
      </div>
    </div>

    <!-- 控制按钮：左右切换 -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    $('#carousel-example-generic').carousel({
      interval: 1500 // in milliseconds
    })
  }
}
</script>

<style lang="scss" scoped>
#carousel-example-generic {
  margin-top: 70px;
}
</style>
