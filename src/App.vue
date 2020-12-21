<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- navbar -->

      <app-menu class="navbar"/>

      <!-- router view -->
      <router-view v-slot="{ Component }">
        <slide-fade-animation>
          <component class="animate__faster" :is="Component" />
        </slide-fade-animation>
      </router-view>
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import 'animate.css/animate.min.css'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu.vue'
import SlideFadeAnimation from './components/shared/SlideFadeAnimation.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    SlideFadeAnimation
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
.navbar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);
  overflow: hidden;
}
</style>
