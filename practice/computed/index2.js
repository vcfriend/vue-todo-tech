import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>getName():{{getName()}}</p>
      <span> full name: {{firstName + ' ' + lastName}}</span>
      <span> FullName: {{fullName}}</span>
      <p>Number: {{number}}</p>
      <p>Number: <input type="text" v-model="number"></input></p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>obj.a <input type="text" v-model="obj.a"></p>
      </div>
  `,
  data: {
    firstName: 'Xiang',
    lastName: 'Yalin',
    number: 0,
    fullName: '',
    obj: {
      a: 0
    }
  },
  computed: {
    // 在computed中不要修改属性值,可能引发无限循环
    name: {
      get () {
        console.log('name计算属性get方法被调用')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        console.log('name计算属性set方法被调用')
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  // watch监听适用于数据改变时,需要进行相关操作如发送请求等
  // 在watch中不要修改属性值,可能引发无限循环
  watch: {
    firstName: {
      handler (newName, oldName) {
        console.log('firstName监控属性被调用')
        this.fullName = newName + ' ' + this.lastName
      },
      // immediate为true时,handler被申明时就被执行一次
      immediate: true
    },
    // 'obj.a'当对象的属性值a改变时,会被监听到时
    'obj.a': {
      handler () {
        console.log('obj.a 对象属性监听handler')
        this.obj.a = 1000
      }
    }
  },
  methods: {
    // 页面渲染时方法会被调用,计算方法不会被调用
    getName () {
      console.log('getName方法被调用')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
