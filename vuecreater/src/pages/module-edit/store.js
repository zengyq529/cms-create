export default {
  namespaced: true,
  state: {
    detail: {
      name: "",
      desc: "",
      components: [],
      props: {},
      source: {},
      style: {},
      event: {},
    },
    currentComponent: {}, //正在编辑的组件
    sourceList: [],
  },
  mutations: {
    setDetail(state, detail) {
      state.detail = { components:detail.components || [], desc:detail.desc || '', event:detail.event || {}, name:detail.name || '', props:detail.props || {}, source:detail.source || {}, style:detail.style || {} };
    },
    setCurrentComponent(state, component) {
      state.currentComponent = component;
    },
    pushNewComponent(state, component) {
      if (!state.currentComponent.name) {
        state.detail.components.push(component);
      } else {
        state.currentComponent.components.push(component);
      }
    },

  },
  actions: {

  },
}