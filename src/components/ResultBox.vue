<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
    <big-mixture-item
      :color="mixtureEffectFill" />

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="sync" />

  </div>
</template>

<script>
import BigMixtureItem from './BigMixtureItem'
import ButtonItem from './shared/ButtonItem.vue'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return { 'background-color': `rgb(${redCol}, ${greenCol}, ${blueCol})` }
    }
  },
  components: {
    BigMixtureItem,
    ButtonItem
  }
}
</script>
