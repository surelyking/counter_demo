<template>
  <div>
    <!-- <h3>当前最新的 count 值为: {{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <input type="text" v-model.number="plusNum" placeholder="请输入 N 的值">
    <button @click="btnHandler3">+1 async</button>
    <button @click="btnHandler4">+N async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plusNum:''
    }
  },
  methods: {
    btnHandler1() {
      this.$store.commit('add')
    },
    btnHandler2() {
      this.$store.commit('addN', this.plusNum)
    },
    btnHandler3() {
      //dispatch 专门用来触发 action
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      this.$store.dispatch('addNAsync',5)
    }
  }
}
</script>
