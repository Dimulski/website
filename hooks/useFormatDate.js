export default function useFormatDate() {
  return function formatDate(isoDate, locale = undefined) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(locale, options);
  }
}