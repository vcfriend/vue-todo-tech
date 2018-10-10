import Vue from 'vue'

var childNode = {
  template: '<div>{{myMessage}}</div>',
  props: ['myMessage']
}

var parentNode = {
  template: `
  <div class="parent">
    <child :my-message="data1"></child>
    <child :my-message="data2"></child>
  </div>`,
  components: {
    'child': childNode
  },
  data () {
    return {
      'data1': 'aaa',
      'data2': 'bbb'
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
    <span>动态props</span>
    <parent></parent>
  </div>
  `
})
