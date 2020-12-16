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

  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'
import ModalItem from './shared/ModalItem.vue'
import modalMixin from '../mixins/ModalMixin.js'

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
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    }
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem
  }
}
</script>
