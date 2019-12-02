<template>
  <div>
    <Nav></Nav>
    <Banner></Banner>
    <Home></Home>
  </div>
</template>

<script>
import Nav from './Nav'
import Banner from './Banner'
import Home from './Home'
export default {
  data () {
    return {
    }
  },
  components: {
    Nav,
    Banner,
    Home
  }
}
</script>

<style lang="scss" scoped>
</style>
