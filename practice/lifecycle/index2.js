import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>yain:{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log('beforeCreate', this)
  },
  created () {
    console.log('created', this)
  },
  beforeMount () {
    console.log('beforeMount', this)
  },
  mounted () {
    console.log('mounted', this)
  },
  beforeUpdate () {
    console.log('beforeUpdate', this)
  },
  updated () {
    console.log('updated', this)
  },
  activated () {
    console.log('activated', this)
  },
  deactivated () {
    console.log('deactivated', this)
  },
  beforeDestroy () {
    console.log('beforeDestroy', this)
  },
  destroyed () {
    console.log('destroyed', this)
  },
  render (h) {
    console.log(this, 'destroyed')
    throw new TypeError('render error')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  }
})

app.$mount('#root')
// let timeRunCount = 0
// var intervalCount = setInterval(() => {
//   app.text++
//   if (timeRunCount++ === 1) {
//     clearInterval(intervalCount)
//   }
// }, 1000)

// setTimeout(() => {
//   app.$destroy()
// }, 1000)
