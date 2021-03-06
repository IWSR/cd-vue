import Alert from './components/alert';

const components = {
  Alert,
};

// 遍历注册组件
Object.keys(components).map((item) => {
  Vue.component(item.name, item);
});


module.exports = {
  version: process.env.version,
  ...components
}
