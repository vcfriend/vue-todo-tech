import Vue from 'vue'
// 子组件定义
// 组件定义时使用驼峰首字母全大写命名方式,使用时全小写 "-" 作为分隔符
const CompOne = {
  // props属性用来定义组件的参数和形为
  props: {
    // 组件属性定义时使用驼峰首非第一个首字母全大写全名方式,使用时全小写 "-" 作为分隔符
    // 子组件的属性值为单向数据流形式,只能由父组件重新传值修改,不能直接修改
    propOne: String,
    propTwo: Number,
    // 组件的属性数据验证
    active: {
      // type: Boolean,
      // required: true
      // default: true
      // default () {
      //   return false
      // }
      validator (value) {
        return typeof value === 'boolean'
      }
    }
  },

  template: `
  <div>
    <input type="text" v-model="text">
    <br><span v-show="active">v-show="{{active}}"显示标签内容</span>
    <br><span>组件属性传值使用:prop-one="{{propOne}}"</span>
    <br><span @click="handleChange">点击我子组件向父组件发送事件,父组件监听到后重新向子组件传值, 为属性值加1 :prop-tow="{{propTwo}}"</span>

  </div>
  `,
  data () {
    return {
      text: 123
    }
  },
  methods: {
    handleChange () {
      this.$emit('onChange')
    }
  }
}

new Vue({
  // 父组件引用子组件使用components
  components: {
    CompOne
  },
  el: '#root',
  data: {
    prop1: 'prop1-text',
    prop2: 520
  },
  methods: {
    handleChange () {
      this.prop2 += 1
    }
  },
  mounted () {
    console.log('this.$refs.comp1', this.$refs.comp1)
  },
  template: `
  <div>
    <comp-one
    ref="comp1"
    :active="true"
    :prop-one="prop1"
    :propTwo="prop2"
    @onChange="handleChange"
    ></comp-one>
  </div>
  `
})
