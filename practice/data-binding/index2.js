import Vue from 'vue'

// var globalVar = 111 //eslint-disable-line
new Vue({
  el: '#root',
  // template: `
  //   <div v-bind:id="aaa" @click="handleClick">
  //     yalin:{{isActive ? 'active' : 'not active'}}
  //     <p>不显示vue组件外定义的变量{{globalVar}}</p>
  //     <p v-html="html"></p>
  //     <p v-bind:id="bbb">222</p>
  //   </div>
  // `,
  template: `
    <div>
      <div :class="{ active: !isActive }">
        对象动态梆定class
      </div>
      <div :class="[!isActive ? 'active' : '']">
        数组动态梆定class
      </div>
      <div
      :class="[{active: !isActive}]"
      :style="[style2, style]"
      >
        数组对象合并动态梆定class
        <p>{{getJoinedArr (arr)}}</p>
      </div>
    </div>

  `,
  data: {
    isActive: false,
    html: '<span>123</span>',
    aaa: 'main',
    bbb: 'two',
    arr: [1, 2, 3],
    style: {
      color: 'red',
      // 去掉浏览器的默认样式
      appearance: 'none'
    },
    style2: {
      color: 'black'
    }
  },
  methods: {
    handleClick () {
      console.log('handleClick')
    },
    getJoinedArr (arr) {
      return arr.join('-')
    }
  }
})
