import Vue from 'vue'

const childNode = {
  template: `
  <div class="child">
    <div>
      <span>子组件数据</span>
      <input v-model="childMsg">
    </div>
    <p>{{childMsg}}</p>
  </div>
  `,
  props: ['childMsg']
}
const parentNode = {
  template: `
  <div class="parent">
    <div>
      <span>父组件数据</span>
      <input v-model="msg">
    </div>
    <p>{{msg}}</p>
    <child :child-msg="msg"></child>
  </div>
  `,
  components: {
    'child': childNode
  },
  data () {
    return {
      'msg': 'match'
    }
  }
}
// 创建根实例
new Vue({
  el: '#root',
  components: {
    'parent': parentNode
  },
  template: `
  <div id="root">
    <span>单向数据流</span>
    <parent></parent>
  </div>
  `
})
