<template>
  <li class="mixtures__mixture">

      <!-- decrement btn -->
      <button-item
        class="mixtures__mixture__btn mixtures__mixture__btn--left"
        icon="arrow-down"
        @click="$emit('decrement')" />

      <div
        :class="`mixtures__mixture__fill mixtures__mixture__fill--${mixture.variant}`"
        :style="{ height: mixture.amount + '%' }" />

      <!-- increment btn -->
      <button-item
        class="mixtures__mixture__btn mixtures__mixture__btn--right"
        icon="arrow-up"
        :movement="-0.5"
        @click="$emit('increment')" />

  </li>
</template>

<script>
import ButtonItem from './shared/ButtonItem.vue'

export default {
  name: 'MixtureItem',
  props: {
    mixture: {
      type: Object,
      required: true
    }
  },
  components: {
    ButtonItem
  }
}
</script>

<style scoped lang="scss">

.mixtures__mixture {
  display: block;
  width: 10rem;
  height: 10rem;
  border: 10px solid #ddd;
  border-radius: 50%;
  margin: 2rem 1rem;
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background-color: #9a9a9a;
  background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
  -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.5);
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);

  &__fill {
    width: 100%;
    height: 100%;
    transition: .2s;

    &--red {
      background-color: #ff7d3b;
      background-image: linear-gradient(189deg, #ff7d3b 0%, #FF2525 74%);
    }

    &--green {
      background-color: #2e561c;
      background-image: linear-gradient(0deg, #2e561c 0%, #2AF598 100%);
    }

    &--blue {
      background-color: #25b6bf;
      background-image: linear-gradient(183deg, #25b6bf 0%, #0070a2 100%);
    }

  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--right {
      right: 1rem;
    }

    &--left {
      left: 1rem;
    }
  }

}
</style>
