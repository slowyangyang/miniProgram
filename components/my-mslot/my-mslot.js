// components/my-mslot/my-mslot.js
Component({
  properties: {//接受父组件传递的参数

  },
  data: {//组件数据初始化
    counter: 0
  },
  methods: {//方法

  },
  options: {//配置项
    // 使用多个插槽
    multipleSlots:true
    // 组件中的样式隔离
    // styleIslation:'Isolated'
  },
  externalClasses:[],//使用父组件传递过来的样式
  observers: {//侦听propties中的属性
    titles(newval) {
      // 只能取到最新的值
      console.log(newval);
    }
  },
  pageLifetimes:{//组件监听父组件的生命周期
    show() {//组件在页面中显示时
      console.log('组件在页面中显示');
      
    },
    hide() {//组件在页面中隐藏时
      console.log('组件在页面中隐藏');
    },
    resize(size) {

    }
  },
  lifetimes: {
    created() {

    },
    attached() {
      console.log("33333");
      
    },
    ready() {

    },
    detached() {

    }
  }

})
