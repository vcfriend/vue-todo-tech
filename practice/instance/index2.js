import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">yalin: {{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  },
  methods: {
    updatedMsg: function () {
      app.text += 1
      console.log('textContent-nextTick前', this.text, this.$el.textContent)
      this.$nextTick(function () {
        console.log('textContent-nextTick后', this.text, this.$el.textContent)
      })
    }
  },
  // 在组件中使用watch()监听方法,当使用完后会自动注销watch()方法
  watch: {
    // text (newText, oldText) {
    //   console.log(`${newText} = ${oldText}`)
    // }
  }
})

app.$mount('#root')
// 间隔1秒循环处理函数
// setInterval(() => {
//   app.text += 1
//   app.$options.data.text += 1
//   // app.$data.text += 1
// }, 1000)
// console.log('app.$data', app.$data)
// console.log('app.$props', app.$props)
// console.log('app.$el', app.$el)
// app.$options.render = (h) => {
//  return h('div', {}, 'new render function')
// }
// console.log('app.$root', app.$root === app)
// console.log('app.$children', app.$children)
// console.log('app.$slots', app.$slots)
// console.log('app.$scopedSlots', app.$scopedSlots)
// console.log('app.$refs', app.$refs)
// console.log('app.$isServer', app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// 延时5秒执行函数
// setTimeout(() => {
//   // 注销watch()方法
//   unWatch()
// }, 5000)

// 定义事件函数$on和$emit必须同时作用于一个vue对象上才能生效
// app.$on('onTest', (a, b) => {
//   console.log(`onTest emited ${1} ${b}`)
// })
// setInterval(() => {
//   // 触发事件
//   app.$emit('onTest', 1, (app.text += 1))
// }, 1000)

// let i = 0
// setInterval(() => {
//   i++
//   console.log(!(app.obj.a))
//   判断非空或不为0值时,进行加1
//   app.obj.a = !(app.obj.a) ? 1 : ++(app.obj.a)
//   console.log('a:', app.obj.a)
//   当对未初始化的对象或变量赋值时,刷新页面显示
//   app.$forceUpdate()
//   同forceUpdate功能相同,给对象添加属性并赋值,会自动刷新页面.删除时使用$delete
//   app.$set(app.obj, 'a', i)
// }, 1000)

// let j = 0
// setInterval(() => {
//   j++
//   app.$set(app.obj, 'a', j)
//   // console.log('a', j, app.obj.a)
// }, 1000)

// // 计数循环每秒执行
// let timeRunCount = 0
// var intervalCount = setInterval(() => {
//   timeRunCount++
//   app.updatedMsg()
//   if (timeRunCount === 3) {
//     clearInterval(intervalCount)
//   }
// }, 1000)
// 到计时循环每秒执行
// let startTime = new Date().getTime()
// var intervalTime = setInterval(() => {
//   app.updatedMsg()
//   if (new Date().getTime() - startTime > 3000) {
//     clearInterval(intervalTime)
//   }
// }, 1000)
