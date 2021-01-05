export const state = () => ({
  theme: null,
  blogPosts: []
});

export const getters = {
  getTheme(state) {
    return state.theme;
  },
  getBlogPosts(state) {
    return state.blogPosts;
  },
  getBlogPostById(state, index) {
    return state.blogPosts[index];
  },
};

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  },
  setBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts;
  },
  addBlogPost(state, blogPost) {
    state.blogPosts.push(blogPost);
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
  setBlogPosts(context, blogPosts) {
    context.commit('setBlogPosts', blogPosts);
  },
  addBlogPost(context, blogPost) {
    context.commit('addBlogPost', blogPost);
  }
};
