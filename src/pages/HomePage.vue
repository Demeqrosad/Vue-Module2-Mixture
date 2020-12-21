<template>
  <div class="page">
    <page-title>Home</page-title>
    <div class="animate__animated animate__shakeY animate__delay-2s">
      <Message severity="warn">Warning! This app is still in development...</Message>
    </div>
  </div>
</template>

<script>
import Message from 'primevue/message'
import PageTitle from '@/components/shared/PageTitle.vue'

export default {
  name: 'HomePage',
  components: {
    Message,
    PageTitle
  }
}

</script>
