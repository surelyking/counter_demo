<template>
  <div>
    <h3>{{showNum}}</h3>
    <button @click="btnHander1">-1</button>
    <button @click="btnHander2">-N</button>
    <button @click="subAsync">-1 async</button>
    <button @click="subNAsync(5)">-N async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHander1() {
      this.sub()
    },
    btnHander2() {
      this.subN(3)
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>
