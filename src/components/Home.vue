<template>
  <div id="home">
    <div class="lvjing">
      <div class="container">
          <div class="row wow fadeInUp" data-wow-duration="1s">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <h1>bootstrap实战课程等你来战！</h1>
              <p>
                本套课程适用于：1.WEB开发人员；2.网站维护人员、管理人员<br />
                培训技能的目标：使用bootstrap框架快速构建响应式网页，颠覆传统WEB前端！
              </p>
              <img src="../assets/images/php.jpg" class="img-responsive" alt="php" />
            </div>
            <div class="col-md-1"></div>
          </div>
      </div>
    </div>
  </div>
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
#home {
  background: url('~@/assets/images/home-bg.jpg') ;
  background-size: cover;
  color: #ffffff;
  text-align: center;
  width: 100%;
  .lvjing{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    padding: 90px 0;
    h1 {
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 25px;
    }
    p {
      font-weight: 400;
      line-height: 35px;
    }
    img {
      margin-top: 30px;
      display: inline-block;
    }
  }
}
</style>
