<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- color mixin -->
      <color-mixin />

    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import ColorMixin from './components/ColorMixin'

export default {
  name: 'App',
  components: {
    AppHeader,
    ColorMixin
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
