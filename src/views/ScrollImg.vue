<template>
  <div class="scroll-img">
    <div>
      <h2 class="up-title">Jack Ruthless</h2>
      <h2 class="down-title">Jack Ruthless</h2>
    </div>

    <div class="grid-container">
      <section class="grid">
        <div class="columns-grid">
          <ImageBox :num="1" />
          <ImageBox :num="2" />
          <ImageBox :num="3" />
        </div>

        <div class="columns-grid">
          <ImageBox :num="4" />
          <ImageBox :num="5" />
          <ImageBox :num="6" />
        </div>
        <div class="columns-grid">
          <ImageBox :num="7" />
          <ImageBox :num="8" />
          <ImageBox :num="9" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageBox from "@/components/ImageBox.vue";

export default {
  name: "HomeView",
  components: {
    ImageBox,
  },
};
</script>

<style scoped>
:root {
  /* --main-color: #e6d600; */
  /* --grid-item-height: 25vw;
  --grid-item-width: calc(var(--grid-item-height) * var(--ratio)); */

  --grid-item-height: 200px;
  --grid-item-width: 100px;

  /* --ratio: 0.95;
  --grid-item-width: calc(var(--grid-item-height) * var(--ratio)); */
}

.scroll-img {
  position: relative;
}

h2 {
  font-size: 12rem;
  font-weight: lighter;
  text-align: center;
  width: 100%;
}
.up-title {
  position: fixed;
  top: -120px;
  z-index: 3;
}

.down-title {
  position: fixed;
  bottom: -120px;
  z-index: 3;
}

.grid-container {
  /* background-color: aquamarine; */
  height: 100%;
  width: 100%;
  padding: 0 100px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
}
.columns-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.columns-grid:nth-child(even) {
  padding-top: 100px;
}
</style>
