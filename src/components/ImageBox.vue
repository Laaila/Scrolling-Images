<template>
  <div class="image-box">
    <div class="transtion-box">
      <img :src="require('@/assets/img/' + num + '.jpg')" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.columns-grid .image-box {
  height: var(--grid-item-height);
  height: 300px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.columns-grid .image-box .transtion-box {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
}

.columns-grid .image-box .transtion-box:hover {
  height: 95%;
  width: 95%;
}

.columns-grid .image-box .transtion-box img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.6s ease-in-out;
}

.columns-grid .image-box .transtion-box:hover img {
  transform: scale(1.3, 1.1);
}

/* .columns-grid .image-box:hover img {
  padding: 10px 0;
} */
</style>
