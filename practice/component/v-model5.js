import Vue from 'vue'

var childNode = {
  template: `
  <div class="child">
    <div>
      <span>子组件数据</span>
      <input v-model="temp">
    </div>
    <p>{{temp}}</p>
  </div>
  `,
  props: ['childMsg'],
  data () {
    return {
      temp: this.childMsg
    }
  }
}
var parentNode = {
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
    <span>修改prop数据</span>
    <parent></parent>
  </div>
  `
})
