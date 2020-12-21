<template>
  <div class="page">
    <page-title>Color</page-title>
    <div v-if="isValidRGB">
      <p>You've picked a great color!</p>
      <flask-item
          :size="15"
          :amount="100"
          :color="customEffectFill"
          :buttonsVisible="false"
          style="margin: 3rem auto"/>
      <div>
        <i class="pi pi-share-alt" style="fontSize: 1.5rem; margin: auto 1rem; color: #637892"></i>
        <InputText type="text" :value="customEffectLink" style="width: 20rem"/>
      </div>
    </div>
    <div v-else>
      <Message severity="error">This color is invalid! It's not RGB format...</Message>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/shared/PageTitle.vue'
import FlaskItem from '@/components/shared/FlaskItem.vue'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

export default {
  name: 'ColorPage',
  data () {
    return {
      isValidRGB: true
    }
  },
  computed: {
    customEffectFill () {
      const redCol = this.$route.params.red
      const greenCol = this.$route.params.green
      const blueCol = this.$route.params.blue
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    customEffectLink () {
      const link = 'http://localhost:8080/#' + this.$route.fullPath
      return link
    },
    RBGValidation () {
      return (
        (this.$route.params.red >= 0 && this.$route.params.red <= 250) &&
        (this.$route.params.green >= 0 && this.$route.params.green <= 250) &&
        (this.$route.params.blue >= 0 && this.$route.params.blue <= 250)
      )
    }
  },
  components: {
    PageTitle,
    FlaskItem,
    InputText,
    Message
  },
  beforeCreate () {
    if (!(this.$route.params.red && this.$route.params.green && this.$route.params.blue)) {
      this.$router.replace({ path: '/' })
    }
  },
  beforeMount () {
    if (!this.RBGValidation) {
      this.isValidRGB = false
    }
  }
}
</script>
