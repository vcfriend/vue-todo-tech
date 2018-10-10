import Vue from 'vue'

const CompOne = {
  // 实现组件属性双向梆定,添加要梆定的值和触发的事件
  // 使用model修改v-model梆定的名称
  model: {
    prop: ['compOnePropValue1'],
    event: 'inputEvent2'
  },
  props: ['compOnePropValue1', 'myMessage'],
  template: `
    <div>
      <span>子组件 myMessage: </span>
      <input type="text" :value="myMessage">
      <input type="text" @input="handleInput" :value="compOnePropValue1">
    </div>
  `,
  methods: {
    handleInput (e) {
      console.log('e.target.value', e.target.value)
      this.$emit('inputEvent2', e.target.value)
    }
  },
  data () {
    return {
      compOneValue1: '222'
    }
  }
}

new Vue({
  components: {
    CompOne
  },
  el: '#root',
  data () {
    return {
      rootValue: '123'
    }
  },
  template: `
    <div>
      <span>父组件 {{rootValue}}</span>
      <comp-one v-model="rootValue" :my-message="rootValue"></comp-one>
    </div>
  `
})
