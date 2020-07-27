export default {
  namespaced: true,
  state: {
    detail: {
      moduleName: "",
      moduleDesc: "",
      components: [],
      props: {},
      source: {},
      style: {},
      event: {},
    },
    currentComponent: {}, //正在编辑的组件
  },
  mutations: {
    setDetail(state, detail) {
      state.detail = detail;
    },
    setCurrentComponent(state, component) {
      state.currentComponent = component;
    },
    pushNewComponent(state, component) {
      if (!state.currentComponent.componentName) {
        state.detail.components.push(component);
      } else {
        state.currentComponent.components.push(component);
      }
    },

  },
  actions: {

  },
}