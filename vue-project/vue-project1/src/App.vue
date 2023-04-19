<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide, nextTick } from 'vue-demi'


export default {
  name: 'App',
  setup() {
    const isRouterActive = ref(true)

    provide('reload', () => {
      isRouterActive.value = false
      nextTick(() => {
        isRouterActive.value = true
      })
    })

  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
</style>
