// components/my-event/my-event.js
Component({
  data: {
    age:11
  },
  methods: {
    handleincrement() {
      this.triggerEvent("increment",{},{})
    }
  }
})
