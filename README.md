# VUE配合bootstarp animation.css wowjs 制作响应式官网首页

## 安装bootstart  

> npm i bootstart@3 jquery

> 配置：使用bootstarp必须使用jquery

> webpack.base.conf 配置 jquery

```
plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
]
```

> 安装wow 

> npm i wow  安装wow会默认安装animation

> main.js 引入

```
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css'
```

> 修改.eslintrc.js 支持 '$'

```
rules 里增加 "no-unused-vars": 'off'

在最后加 
globals: {
  $: true
}
```

> 在用到 wow的组件中  引入 import { WOW } from 'wowjs'

```
mounted () {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    })
    wow.init()
}
```
> 在需要动画的元素上面加上类名 wow 和 animation.css 动画的 class 即可

> data-wow-duration（动画持续时间）

> data-wow-delay（动画延迟时间）

> data-wow-offset（元素的位置露出后距离底部多少像素执行）

> data-wow-iteration（动画执行次数）"# vue_bootstrap" 
