import CascaderTree from './src/cascader-tree';

/* istanbul ignore next */
CascaderTree.install = function(Vue) {
  Vue.component(CascaderTree.name, CascaderTree);
};

export default CascaderTree;
