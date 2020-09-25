// components/tab-control/tab-control.js
Component({
properties: {
  titles: {
    type: Array,
    value:[]
  }
},
data:{
  currentindex: 0
},
methods: {
  handleitem(event) {
    let index = event.currentTarget.dataset.index
    let type = this.properties.titles[index]
    this.setData({
      currentindex: event.currentTarget.dataset.index
    })
    this.triggerEvent("itemClick",{index,'type':type},{})
  }
},
pageLifetimes: {
  show() {
    console.log('组件展示了');
    
  },
  hide() {
    console.log('组件隐藏了');
    
  }
},
lifetimes: {
  created() {
    console.log('被创建');
    
  },
  attached() {
    console.log('被加载进页面了');
    
  },
  ready() {
    console.log('组件渲染完成');
    
  },
  detached() {
    console.log('组件被移除');
    
  }
}
})
