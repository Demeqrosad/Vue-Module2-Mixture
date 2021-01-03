<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      @increment="increment"
      @decrement="decrement" />

    <!-- result box -->
    <result-box
      @refresh="refresh"
      />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ColorMixin',
  computed: {
    ...mapState({ mixtures: 'mixtures' })
  },
  methods: {
    ...mapActions(['updateMixture', 'resetMixtures']),
    increment (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 100) return false
      this.updateMixture({ variant: mixture.variant, action: 'increment' })
    },

    decrement (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 0) return false
      this.updateMixture({ variant: mixture.variant, action: 'decrement' })
    },

    refresh () {
      const variants = ['red', 'green', 'blue']
      this.resetMixtures(variants)
    }
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
