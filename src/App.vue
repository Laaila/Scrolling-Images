<template>
  <div id="app">
    <LayoutView />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import LayoutView from "@/views/LayoutView.vue";
export default defineComponent({
  name: "App",
  components: {
    LayoutView,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", serif;
  background-color: #b7b19f;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
