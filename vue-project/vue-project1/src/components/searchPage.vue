<template>
    <topNavigator />
    <div class="wrapper">
      <div class="whiteboard">
        <h2>Group lists</h2>
        <ul>
        <li v-for="(group, index) in context" :key="index">{{ group }}</li>
      </ul>
      </div>
    </div>
    <mainFooter />
  </template>
  
    
  <script>
  import topNavigator from "./firstPage/topNavigator.vue"
  import mainFooter from "./firstPage/mainFooter.vue"
  
  export default {

    data() {
    return {
      context: [],
    };
  },

  mounted() {
    // update context with initial data
    this.updateContext();
  },

  methods: {
    updateContext() {
      // update context with new data
      this.context = document.searchLists;
    },
  },
  watch: {
    // watch for changes to searchLists and update context when necessary
    '$root.$data.searchLists': function () {
      this.updateContext();
    },
  },
  
    components: {
      topNavigator,
      mainFooter
    }
  };
  </script>
    
  <style scoped>
  .wrapper{
    height: 800px;
    width: 100%;
  }

  .wrapper .whiteboard{
    height: 600px;
    width: 50%;
    margin: 150px auto;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  .whiteboard h2{
    margin-bottom: 20px;
    /* top: 20px; */
  }
  </style>
    