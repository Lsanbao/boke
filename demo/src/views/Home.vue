<template>
  <div class="home">
    <p>姓名：{{obj.name}}</p>
    <p>描述：{{obj.ext}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions,mapState } from 'vuex';
export default {
  name: 'Home',
  components: {

  },
  created() {
    this.init()
  },
  computed:{
    ...mapState(['obj'])
  },
  methods: {
    // ...mapActions(['getData'])
    ...mapActions({
      init: 'getData'
    })
  },
}
</script>
