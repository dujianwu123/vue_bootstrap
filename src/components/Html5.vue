<template>
  <section id="html5">
    <div class="container">
      <div class="col-md-6 wow fadeInLeft">
        <h2>HTML5前端开发</h2>
        <p>HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行！</p>
        <p><span class="glyphicon glyphicon-grain mai-icon"></span>使用HTML5与CSS3技术轻松实现设备自适应展示。</p>
        <p><span class="glyphicon glyphicon-grain mai-icon"></span>清晰明了的语义代码结构，更高的可读性、更利于页面维护的。</p>
      </div>
      <div class="col-md-6 wow fadeInRight">
        <img src="../assets/images/html5.jpg" class="img-responsive" alt="" />
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
#html5{
  background: #f8f8f8;
}
#html5 , #bootstrap{
  padding: 80px 0;
}
#html5 h2 , #bootstrap h2{
  font-weight: bold;
}
#html5 p  , #bootstrap p{
  line-height: 25px;
}
</style>
