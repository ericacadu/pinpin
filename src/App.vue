<template>
  <div id="app">
    <div class="container-fluid g-0">
      <Navbar />
      <Header />
      <div class="container-fluid border-bottom sticky-top bg-white">
        <Tabs />
      </div>
       <div class="container px-3 py-4" id="tabs-wrapper">
         <Main />
      </div>
    </div>
    <footer class="bg-dark text-white text-center py-4 fs-7"
    style="letter-spacing: 1px;">
      Copyright &copy; 拼拼 All rights reserved.
    </footer>
  </div>
</template>

<script>
import Navbar from './components/nav'
import Header from './components/header'
import Tabs from './components/nav-tabs'
import Main from './components/main'
export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Tabs,
    Main
  }
}
</script>

<style lang="sass">
@import './assets/style'
</style>
