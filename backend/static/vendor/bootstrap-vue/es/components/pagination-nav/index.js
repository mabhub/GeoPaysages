import bPaginationNav from './pagination-nav';
import { registerComponents, vueUse } from '../../utils/plugins';

var components = {
  bPaginationNav: bPaginationNav
};

var VuePlugin = {
  install: function install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;