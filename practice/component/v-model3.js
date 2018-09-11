import Vue from 'vue'

const CompOne = {
  // 实现组件属性双向梆定,添加要梆定的值和触发的事件
  // 使用model修改v-model梆定的名称
  model: {
    prop: ['value1'],
    event: 'input2'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      console.log('e.target.value', e.target.value)
      this.$emit('input2', e.target.value)
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
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `
})
