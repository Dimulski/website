export const dateFormatMixin = {
  methods: {
    formatDate(isoDate, locale = undefined) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(isoDate).toLocaleDateString(locale, options);
    }
  }  
};
