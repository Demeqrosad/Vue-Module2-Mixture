<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <flask-item
      :key="index"
      v-for="(mixture, index) in mixtures"
      :variant="mixture.variant"
      :amount="mixture.amount"
      @increment="$emit('increment', index)"
      @decrement="$emit('decrement', index)" />
  </ul>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'Mixtures',
  computed: {
    ...mapState({ mixtures: 'mixtures' })
  },
  components: { FlaskItem }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
