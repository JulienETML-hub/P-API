<script>
import Header from '../src/components/Header.vue'
import Home from './views/Total/Home.vue'
import Footer from '../src/components/Footer.vue'

export default {
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<template>
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<style scoped>
#layout {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050505;
  text-decoration: none;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b982;
}
</style>