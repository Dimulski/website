export const state = () => ({
  theme: null
})

export const getters = {
  
}
export const mutations = {
  
}

export const actions = {
  async nuxtServerInit(store, context) {
    // console.log(this.$auth.$storage.getCookies())

    const cookies = context.req.headers.cookie;
    console.log(cookies)
    // const match = cookies.match(/theme=(light|dark)/)
    // if (match) {
    //   state.theme = match[1];
    //   console.log(state.theme);
    // }
    // console.log(cookies.match(/theme=(light|dark)/))
    // console.log(cookies.match(/_ga=(GA1.1.127531909.1604270000)/)?[1])


    // if (cookies.includes('theme')) {
    //   console.log(state.theme)
    //   state.theme = cookies.substring(cookies.indexOf('theme'), )
    // }
    // console.log(context.req.headers.cookie)
    // context.req.headers.cookie['theme'] = 'cool'
    // console.log(context.req.headers.cookie)

    // console.log(context)
    // console.log(this)

  },
  
  setThemeCookie() {

  }
}
