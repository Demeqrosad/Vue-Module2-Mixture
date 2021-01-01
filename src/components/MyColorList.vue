<template>
  <!-- colors -->
  <ul class="colors">
    <flask-item
      :key="index"
      v-for="(color, index) in colors"
      :amount="100"
      :color="color"
      :buttonsVisible="false"
      :btnRemove="true"
      @remove="removeColor(index)"/>
  </ul>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MyColorList',
  computed: {
    ...mapGetters({ colors: 'RGBColors' })
  },
  methods: {
    ...mapMutations({ deleteColor: 'REMOVE_COLOR' }),
    funcName (color) {
      return `rgb(${color.red}, ${color.green}, ${color.blue})`
    },
    removeColor (index) {
      this.deleteColor(index)
    }
  },
  components: { FlaskItem }
}
</script>

<style scoped lang="scss">
.colors {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
