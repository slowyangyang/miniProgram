// pages/home/home.js
let name = getApp()
console.log(name.globalData.say);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'this is message',
    info:{
      name:'小刚',
      sex:"男",
      age:12
    },
    count:0
  },
  getinfo(event) {
    console.log(event.detail);
    
  },
  handlertap(event) {
    console.log(event);
    // target:事件触发的元素
    //currentTarget:事件绑定的元素
    console.log(event.target.dataset.age);
    console.log(this);
  },
  increment() {
    this.setData({
      count:this.data.count+1
    })
    console.log(this.selectComponent.data);
  },
  itemClick(event) {
    console.log(event.detail);
  },
  handelit() {
    this.selectComponent("#sel").add(30)
    
  }

})