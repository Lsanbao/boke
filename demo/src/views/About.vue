<template>
  <div class="about">
    <p>a模块{{numA}}</p>
    <p>b模块{{numB}}</p>
    <p>a模块{{moneyA}}</p>
    <p>b模块{{moneyB}}</p>
    <button @click="addA">A模块++</button>
    <button @click="addB">B模块++</button>
  </div>
</template>
<script>
import { mapState,mapMutations,mapGetters } from 'vuex';
export default {
  created() {
    console.log(this.$store.state);
  },
  computed:{
    ...mapState({
      numA: state => state.a1.numA,
      numB: state => state.b1.numB,
    }),
    ...mapGetters({
      moneyA: 'a1/money',
      moneyB: 'b1/money',
    })
  },
  methods: {
    // ...mapMutations('a',['add'])
    ...mapMutations({
      addA: 'a1/add',
      addB: 'b1/add'
    })
  },
}
</script>
