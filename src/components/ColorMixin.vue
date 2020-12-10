<template>
  <div>

    <!-- mixtures -->
    <ul class="mixtures">
      <li
        class="mixtures__mixture"
        :key="index"
        v-for="(mixture, index) in mixtures">

          <!-- decrement btn -->
          <button
            @click="decrement(index)"
            class="mixtures__mixture__btn mixtures__mixture__btn--left">
            <span
             class="fas fa-arrow-down" />
          </button>

          <div
            :class="`mixtures__mixture__fill mixtures__mixture__fill--${mixture.variant}`"
            :style="{ height: mixture.amount + '%' }" />

          <!-- increment btn -->
          <button
            @click="increment(index)"
            class="mixtures__mixture__btn mixtures__mixture__btn--right">
            <span
             class="fas fa-arrow-up" />
          </button>

      </li>
    </ul>

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
    <div class="mixture-effect">
      <div
        class="mixtures__mixture__fill"
        :style="mixtureEffectFill" />
    </div>

    <!-- refresh btn -->
    <button
      @click="refresh"
      class="refresh-btn">
      <span
        class="fas fa-sync" />
    </button>

  </div>
</template>

<script>
export default {
  name: 'ColorMixin',
  data: () => ({
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }]
  }),
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return { 'background-color': `rgb(${redCol}, ${greenCol}, ${blueCol})` }
    }
  },
  methods: {
    increment (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 100) return false
      mixture.amount++
    },

    decrement (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 0) return false
      mixture.amount--
    },

    refresh () {
      this.mixtures = this.mixtures.map(item => ({ ...item, amount: 50 }))
    }
  }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;

  &__mixture {
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
      background-color: #9a9a9a;
      background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
      box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
      transition: .3s;
      outline: none;
      color: #637892;

      &--right {
        right: 1rem;
        &:hover {
          margin-top: -0.5rem;
        }
      }

      &--left {
        left: 1rem;
        &:hover {
          margin-top: 0.5rem;
        }
      }
    }

  }

}

.mixture-effect {
  display: block;
  width: 15rem;
  height: 15rem;
  border: 10px solid #ddd;
  border-radius: 50%;
  margin: 3rem auto;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.5);
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9a9a9a;
    background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
    opacity: 0.5;
  }
}

.refresh-btn {
  background-color: #9a9a9a;
  background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
  transition: .3s;
  outline: none;
  font-size: 1.5rem;
  color: #637892;

  &:hover {
    margin-top: -0.5rem;
  }
}

</style>
