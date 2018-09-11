import Vue from 'vue'

const CompOne = {
  name: 'compOne',
  props: ['props1'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        // 事件的梆定
        click: () => { this.$emit('click') }
      }
    }, [
      this.$slots.default,
      createElement('br'),
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '150px',
        border: '1px solid #aaa'
      },
      value: 'compOne value'
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
  mounted () {
    console.log(this.$refs.compOne, this.$refs.span)
  },
  methods: {
    // 事件的定义
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one ref="compOne">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `
  render () {
    return this.$createElement(
      'comp-one',
      {
        ref: 'compOne',
        props: {
          props1: this.value
        },
        // 事件的申明
        on: {
          click: this.handleClick
        }
      },

      [
        this.$createElement(
          'span',
          {
            ref: 'span'
          },
          this.value
        )
      ]
    )
  }
})
