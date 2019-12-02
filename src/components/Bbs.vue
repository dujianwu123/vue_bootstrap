<template>
  <section id="bbs">
    <div class="container">
      <div class="row wow wobble">
        <div class="col-md-4">
          <img src="../assets/images/a.png" class="img-responsive" alt="">
          <h3>Android开发</h3>
          <p>Android开发技术交流、问题求助、实战案例分享</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/images/i.png" class="img-responsive" alt="">
          <h3>IOS开发</h3>
          <p>iOS开发技术交流，海量iOS实战干货分享</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/images/b.png" class="img-responsive" alt="">
          <h3>嵌入式底层开发</h3>
          <p>底层嵌入式开发、实战案例等技术交流讨论</p>
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
#bbs{
  padding: 80px 0;
  text-align: center;
}
#bbs .col-md-4{
  padding: 15px;
}
#bbs .col-md-4:hover{
  background: #f1f1f1;
  box-shadow: 1px 1px 4px #ccc;
}
#bbs img{
  margin: 0 auto;
}
#bbs h3{
  font-weight: bold;
}
</style>
