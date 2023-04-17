<template>
    <topNavigator />
    <middleBox />
    <div class="pad"></div>
    <lowerBox />
    <!-- <button class="abc" @click="checkpoint">unit test {{ userid }}</button> -->
    <mainFooter />
</template>

<script>
import topNavigator from "./topNavigator.vue"
import middleBox from "./middleBox.vue"
import lowerBox from "./lowerBox.vue"
import mainFooter from "./mainFooter.vue"
export default {
  components: {
    topNavigator,
    middleBox,
    lowerBox,
    mainFooter
  },
  methods: {
    checkpoint() {
      const userid = document.userInfo.userid;
      this.userid = userid;
    },
  },
  data() {
    return {
      userid: null
    };
  }
}
</script>
  
<style>
* {
    text-decoration: none;
    list-style: none;
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.pad {
    height: 10px;
}
</style>
