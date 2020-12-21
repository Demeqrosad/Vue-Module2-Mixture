<template>
  <transition
    name="custom-transition"
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFadeAnimation'
}
</script>
