import Vue from 'vue'

const ChildComponent = {
  template: `<div>child component:
    <br>显示父组件的值{{value}}
    <br>动态梆定父组件的值{{data.value}}
  </div>`,
  // 子级中的inject:[变量名]] 配合父组中的 provide(){return{返回inject中申明的变量}}}
  inject: ['yeye', 'value', 'data'],
  mounted () {
    console.log('ChildComponent', this.$parent.$options.name, this.yeye)
  }
}

const CompOne = {
  name: 'compOne',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
    // 作用域插槽<br>
      <slot :value="value" aaa1="111"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '150px',
        border: '1px solid #aaa'
      },
      value: 'CompOne-value'
    }
  }
}
new Vue({
  components: {
    CompOne
  },
  // 父级引用子级的变量时,在父级中使用provide(),子级中使用inject:[定义变量名]
  provide () {
    // 定义的data对象用于数据梆定,获取子级中的返回值
    const data = {}
    // defineProperty(data对应子级中inject定义的变量名, 'value'对应本级中的定义的变量)
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      value: this.value,
      // 对应子组件中的inject定义的变量名,返回defineProperty中的get方法获取到的值
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log('new Vue', this.$refs.comp, this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
      // slot-scope显示是组件内的变量值
        <span slot-scope="props" ref="span">{{props.value}} {{props.aaa1}} {{value}}</span>
      </comp-one> 
      <input type="text" v-model="value"/>
    </div>
  `
})
