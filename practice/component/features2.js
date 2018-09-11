import Vue from 'vue'

const CompOne = {
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'CompOne value'
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
      <comp-one>
        <span slot="header">显示内容在header类标签内</span>
        <span slot="body">显示内容在body类标签内</span>
      </comp-one>
    </div>
  `
})
