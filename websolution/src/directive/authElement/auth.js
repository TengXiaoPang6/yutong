import store from '@/store'

export default{
  bind: function(el, binding) {
    if (store.getters.roles.indexOf(binding.value) === -1) {
      el.parentNode.removeChild(el)
    }
  }
}
