<template>
  <div class="scroll-img">
    <div>
      <h2 class="up-title">Jack Ruthless</h2>
      <h2 class="down-title">Jack Ruthless</h2>
    </div>

    <div class="grid-container">
      <section class="grid">
        <div class="columns-grid" id="triangle1">
          <ImageBox num="1" />
          <ImageBox num="2" />
          <ImageBox num="3" />
          <ImageBox num="10" />
          <ImageBox num="11" />
          <ImageBox num="12" />
          <ImageBox num="13" />
          <ImageBox num="14" />
          <ImageBox num="15" />
        </div>

        <div class="columns-grid" id="triangle2">
          <ImageBox num="4" />
          <ImageBox num="5" />
          <ImageBox num="6" />
          <ImageBox num="16" />
          <ImageBox num="17" />
          <ImageBox num="18" />
          <ImageBox num="19" />
          <ImageBox num="20" />
          <ImageBox num="21" />
        </div>
        <div class="columns-grid" id="triangle3">
          <ImageBox num="7" />
          <ImageBox num="8" />
          <ImageBox num="9" />
          <ImageBox num="22" />
          <ImageBox num="23" />
          <ImageBox num="24" />
          <ImageBox num="25" />
          <ImageBox num="26" />
          <ImageBox num="27" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageBox from "@/components/ImageBox.vue";

import { defineComponent, onMounted } from "vue";

export default defineComponent({
  components: {
    ImageBox,
  },
  setup() {
    onMounted(() => {
      console.log("test1");
      let tri1 = document.querySelector("#triangle1");
      let tri2 = document.querySelector("#triangle2");
      let tri3 = document.querySelector("#triangle3");

      let tri1XInitial = tri1.getBoundingClientRect().y;
      let tri2XInitial = tri2.getBoundingClientRect().y;
      let tri3XInitial = tri3.getBoundingClientRect().y;

      window.addEventListener("scroll", function () {
        let total = document.body.scrollHeight;

        let current = window.scrollY;

        let per = current / total;

        console.log("current : " + current);
        console.log("per : " + per);

        tri1.style.transform = `translateY(${
          -(tri1XInitial * per * 1.25) + tri1XInitial + "px"
        })`;

        tri3.style.transform = `translateY(${
          -(tri3XInitial * per * 1.25) + tri3XInitial + "px"
        })`;

        tri2.style.transform = `translateY(${
          -current * 0.25 + tri2XInitial + "px"
        })`;
      });
    });

    return {};
  },
});
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
  height: 650vh;
  overflow: hidden;
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
  position: fixed;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
  position: relative;
  gap: 4rem;
}

.columns-grid:nth-child(odd) {
  transform: translateY(-70%);
}
.columns-grid:nth-child(even) {
  margin-top: 70px;
}
</style>
