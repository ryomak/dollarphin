const eventBus = {
  install: function (Vue, options) {
    Vue.prototype.$eventBus = new Vue()
  }
}
export default eventBus