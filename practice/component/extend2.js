import Vue from 'vue'

const CompOne = {
  template: `
    <div>
      <input type="text" v-model="text">
      <span @onClick="handleChange">{{propOne}}</span>
    </div>
  `,
  props: {
    active: Boolean,
    propOne: String
  },
  data () {
    return {
      text: 'CompOne text'
    }
  },
  mounted () {
    console.log('CompOne mouted text:', this.text)
  },
  methods: {
    handleChange () {
      this.$emit('onChange')
    }
  }
}

const CompChild2 = {
  extends: CompOne,
  data () {
    return {
      text: 'CompChild2 text'
    }
  },
  mounted () {
    // console.log('CompChild2 mounted', this.$parent.$opteions.name)
  }
}

new Vue({
  template: `
  <div>
    <span>{{text}}</span>
    <CompChild2></CompChild2>
  </div>
`,
  // parent: parent,
  name: 'Root',
  el: '#root',
  propsData: {
    propOne: 'Vue propOne'
  },
  components: {
    CompChild2
  },
  data: {
    text: 'new Vue text'
  },
  mounted () {
    // console.log(this.$parent.$options.name)
  }
})

// const CompChild = Vue.extend(CompOne)

// new CompChild({
//   el: '#root',
//   propsData: {
//     propOne: 'childPropText'
//   },
//   data: {
//     text: 'childDataText'
//   },
//   mounted () {
//     console.log('CompChild mounted text:', this.text)
//   }
// })
