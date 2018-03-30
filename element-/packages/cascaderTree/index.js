import CascaderTree from './src/main';

/* istanbul ignore next */
CascaderTree.install = function(Vue) {
  Vue.component(CascaderTree.name, CascaderTree);
};

export default CascaderTree;
