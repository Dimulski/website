export const state = () => ({
  theme: null,
  blogposts: []
});

export const getters = {
  getTheme(state) {
    return state.theme;
  },
  getBlogposts(state) {
    return state.blogposts;
  },
  getBlogpostById(state, index) {
    return state.blogposts[index];
  },
};

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  },
  setBlogposts(state, blogposts) {
    state.blogposts = blogposts;
  },
  addBlogpost(state, blogpost) {
    state.blogposts.push(blogpost);
  }
};

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
  },
  setBlogposts(context, blogposts) {
    context.commit('setBlogposts', blogposts);
  },
  addBlogpost(context, blogpost) {
    context.commit('addBlogpost', blogpost);
  }
};
