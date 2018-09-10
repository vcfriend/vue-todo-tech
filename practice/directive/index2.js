import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-pre>vue不解析: {{text}}</div>
      <div v-once>vue解析一次,用于显示静态内容: {{text}}</div>
      <div>Text: {{text}}</div>
      <div v-if="true">v-if标签内容</div>
      <div v-else-if="false">v-elseif标签内容</div>
      <div v-else="true">v-else标签内容</div>
      // 转换成数字格式
      <input text="text" v-model.number="text">
      // 去掉首尾空格
      <input text="text" v-model.trim="text">
      // 鼠标失焦时赋值
      <input text="text" v-model.lazy="text">
      <input type="checkbox" v-model="active">
      <div>
      // 复选框
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
        <input type="checkbox" :value="4" v-model="arr">
      </div>

      <div>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <ul>
        v-for遍历数组
        <li v-for="(item, index) in arr"
        :key="item"
        >{{item}}={{index}}</li>
      </ul>
      <ul>
      v-for遍历对象
      <li v-for="(val, key, index) in obj"
      >{{val}}:{{key}}:{{index}}
      </li>
      </ul>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: ''
  }
})
