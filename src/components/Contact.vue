<template>
  <section id="contact">
    <div class="lvjing">
      <div class="container">
        <div class="row">
          <div class="col-md-6  wow fadeInLeft">
            <h2>
              <span class="glyphicon glyphicon-send"></span>
              &nbsp;
              联系小喵
            </h2>
            <p>
              我们从不说空话，专注于IT在线教育，脱离传统教育的束缚，让你走哪学哪，想学就学。逗比的老师，贴心的助教，在这儿你能感受到来自五 湖四海伙伴们热情和踏实的学习态度！
            </p>
            <address>
              <p>
                <span class="glyphicon glyphicon-home"></span>
                &nbsp;
                地址:北京市丰台区国投财富广场
              </p>
              <p>
                <span class="glyphicon glyphicon-phone-alt"></span>
                &nbsp;
                联系电话：010-xxxxxxxx
              </p>
              <p>
                <span class="glyphicon glyphicon-envelope"></span>
                &nbsp;
                邮箱:dujianwu.cc@qq.com
              </p>
            </address>
          </div>
          <div class="col-md-6  wow fadeInRight">
            <form action="#" method="post">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="您的姓名" />
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="您的邮箱" />
              </div>
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="标题" />
              </div>
              <div class="col-md-12">
                <textarea class="form-control" placeholder="留言内容" rows="4"></textarea>
              </div>
              <div class="col-md-8">
                <input type="submit" class="form-control" value="提交" />
              </div>
            </form>
          </div>
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
#contact{
  background: url('~@/assets/images/contact-bg.png') no-repeat;
                   
  background-size: cover;
  color: #ffffff;
}
#contact h2{
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 25px;
}
#contact p{
  line-height: 25px;
  margin-bottom: 20px;
}
#contact .form-control {
  border: none;
  border-radius: 0;
  height: 50px;
  margin-bottom: 20px;
}
#contact textarea.form-control{
  height: auto;
}
#contact input[type="submit"]{
  background: #40D2B1;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s;
}
#contact input[type="submit"]:hover{
  background: rgb(44, 142, 120);
}
.lvjing{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  padding: 90px 0;
}
</style>