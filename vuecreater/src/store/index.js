import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import moduleEdit from '@/pages/module-edit/store'
export default new Vuex.Store({
  modules: {
    moduleEdit
  }
})