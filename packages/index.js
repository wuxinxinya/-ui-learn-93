// 引入定义好的组件
import Button from './button/button.vue'
import MyHeadline from './headline/headline.vue'
// 整体向外导出一个对象
// 这个对象有个install方法
export default {
  // Vue.use（）
  install (Vue) {
    console.log(122)
    Vue.component('MyButton', Button)
    Vue.component('MyHeadline', MyHeadline)
  }
}
