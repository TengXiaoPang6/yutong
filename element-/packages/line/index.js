import Line from './src/line';

/* istanbul ignore next */
Line.install = function(Vue) {
  Vue.component(Line.name, Line);
};

export default Line;
