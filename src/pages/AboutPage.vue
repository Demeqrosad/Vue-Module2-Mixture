<template>
  <div class="page">
    <page-title>About</page-title>
    <p>This app was built with Vue.js</p>
    <div class="animate__animated"
      :class="isAnimated ? 'animate__jackInTheBox' : ''"
      @animationEnd="isAnimated = false"
      @click="turnOnAnimation">
      <img src="@/assets/Vue-logo.png">
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/shared/PageTitle.vue'

export default {
  name: 'AboutPage',
  data () {
    return {
      isAnimated: true
    }
  },
  methods: {
    turnOnAnimation () {
      console.log('turnOnAnimation')
      this.isAnimated = true
    }
  },
  components: {
    PageTitle
  }
}
</script>
