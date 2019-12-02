<template>
  <div>
    <Nav></Nav>
    <Banner></Banner>
    <Home></Home>
    <Bbs></Bbs>
    <Html5></Html5>
    <Course></Course>
    <App></App>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './Nav'
import Banner from './Banner'
import Home from './Home'
import Bbs from './Bbs'
import Html5 from './Html5'
import Course from './Course'
import App from './App'
import Contact from './Contact'
import Footer from './Footer'
export default {
  data () {
    return {
    }
  },
  components: {
    Nav,
    Banner,
    Home,
    Bbs,
    Html5,
    Course,
    App,
    Contact,
    Footer
  }
}
</script>
