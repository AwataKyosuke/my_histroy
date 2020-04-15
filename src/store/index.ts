import Vue from 'vue'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'
import state from '@/store/state'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'

Vue.use(Vuex)
Vue.use(VModal)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
