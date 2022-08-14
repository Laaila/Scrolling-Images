<template>
  <div class="nav">
    <ul>
      <router-link :to="{ name: 'scrollImg' }">
        <li>Scroll Img</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
.nav {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-items: center;
  align-items: center;
}
ul {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
}
</style>
