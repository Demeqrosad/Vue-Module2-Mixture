import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ]
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
      state.colors.splice(state.colors[color], 1)
    }
  },
  actions: {
    addColor ({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    }
  }
})
