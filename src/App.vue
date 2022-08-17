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
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #1f1f1f63 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #1f1f1f63;
  border-radius: 10px;
  /* border: 3px solid #ffffff; */
}
html {
  scroll-behavior: smooth;
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
