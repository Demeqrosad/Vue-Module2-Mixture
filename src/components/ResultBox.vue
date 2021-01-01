<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
    <flask-item
      :size="15"
      :amount="100"
      :color="mixtureEffectFill"
      :buttonsVisible="false"
      style="margin: 3rem auto"/>

    <!-- rgb -->
    <p
      v-text="mixtureEffectFill"/>
    <p
      v-text="customColors"/>

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-refresh" />
    <!-- about btn -->
    <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-question"
      style="font-weight: bold; margin: 0 1rem" />
    <!-- share btn -->
    <router-link :to='linkToColor'>
      <button-item
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-share-alt"
      style="font-weight: bold" />
    </router-link>
    <!-- add color btn -->
    <button-item
      @click="saveColor"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-pencil"
      style="font-weight: bold; margin: 0 1rem" />
    <fade-animation>
      <modal-item
        v-if="modalVisible"
        @cancel="hideModal">

         <template v-slot:header>
           heading text
         </template>

         <template v-slot:body>
           body text
         </template>

         <template v-slot:footer>
           additional action button
         </template>

      </modal-item>
    </fade-animation>
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'
import ModalItem from './shared/ModalItem.vue'
import FadeAnimation from './shared/FadeAnimation.vue'
import modalMixin from '../mixins/ModalMixin.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  mixins: [modalMixin],
  computed: {
    ...mapGetters({ customColors: 'CustomColorsNumber' }),
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    linkToColor () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    },
    customColors2 () {
      const customColorsNumber = this.$store.state.colors.length
      return `There are ${customColorsNumber} colors in your pocket!`
    }
  },
  methods: {
    ...mapActions(['addColor']),
    saveColor () {
      this.addColor(this.mixtures)
    }
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem,
    FadeAnimation
  }
}
</script>
