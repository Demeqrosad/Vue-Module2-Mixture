import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ],
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
  },
  getters: {
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    CustomColorsNumber (state) {
      return state.colors.length
    }
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR (state, color) {
      state.colors.splice(color, 1)
    },
    UPDATE_MIXTURE (state, { variant, change }) {
      const index = state.mixtures.findIndex(mixture => mixture.variant === variant)
      state.mixtures[index].amount += change
    },
    RESET_MIXTURE (state, variants) {
      variants.forEach(variant => {
        const index = state.mixtures.findIndex(mixture => mixture.variant === variant)
        state.mixtures[index].amount = 50
      })
    }
  },
  actions: {
    addColor ({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    },
    updateMixture ({ commit }, { variant, action }) {
      switch (action) {
        case 'increment':
          commit('UPDATE_MIXTURE', { variant: variant, change: 1 })
          break
        case 'decrement':
          commit('UPDATE_MIXTURE', { variant: variant, change: -1 })
          break
        default:
          commit('UPDATE_MIXTURE', { variant: variant, change: 0 })
      }
    },
    resetMixtures ({ commit }, variants) {
      commit('RESET_MIXTURE', variants)
    }
  }
})
