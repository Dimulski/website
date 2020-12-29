export const state = () => ({
  theme: null
})

export const getters = {
  getTheme(state) {
    return state.theme
  },
}

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    const cookies = context.req.headers.cookie;
    if (cookies) {
      const match = cookies.match(/theme=(light|dark)/);
      if (match) {
        store.dispatch('setTheme', match[1]);
      }
    }
  },
  setTheme(context, theme) {
    context.commit('setTheme', theme);
  }
}
