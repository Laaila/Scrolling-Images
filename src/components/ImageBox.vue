<template>
  <transition
    :class="[
      {
        activeImage: theActivedata?.active == num.image,
        notActive: theActivedata?.active !== num.image,
      },
    ]"
    tag="div"
    name="imgs"
    :duration="1000"
  >
    <div class="main-box" :class="classState">
      <div class="image-box">
        <div class="transtion-box">
          <img :src="require('@/assets/img/' + num.image + '.jpg')" alt="" />
        </div>
      </div>
      <div class="details">
        <span>{{ num.title }}</span>
        <span>{{ num.date }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { theActive } from "@/store";

export default {
  props: {
    num: {
      type: Object,
    },
    classState: {
      type: String,
    },
    activeImage: {
      type: String,
    },
  },
  setup() {
    const theActivedata = theActive();

    return { theActivedata };
  },
};
</script>

<style lang="scss">
.columns-grid .open.main-box {
  width: 150px;
}

.columns-grid {
  .image-box {
    height: 340px;
    width: 360px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    transition: all 1.2s ease;
    &:hover {
      transform: scale(0.85, 0.9);
    }
    .transtion-box {
      &:hover {
        height: 100%;
        width: 100%;
        img {
          transform: scale(1.1, 1.1);
        }
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
    }
  }
}

// .columns-grid .image-box .transtion-box:hover img {
//   transform: scale(1.6, 1.1);
// }

.columns-grid .main-box.open .image-box {
  height: 50px;
  width: 50px;
  margin: 0;
  border-radius: 0px;
  pointer-events: stroke;
}

.activeImage .image-box {
  height: 400px !important;
  width: 430px !important;
  border-radius: 10px !important;
}

.activeImage .image-box .transtion-box img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.columns-grid.open {
  .activeImage {
    position: absolute;
    height: 400px !important;
    width: 430px !important;
    top: 45% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    z-index: 100 !important;
    margin: 0 !important;
    border-radius: 10px !important;
  }
}

.columns-grid:nth-child(2) {
  .main-box {
    position: absolute;
    left: 50px;
    transition: all 1.2s ease;
  }

  @for $i from 1 through 10 {
    .main-box:nth-child(#{$i}) {
      bottom: #{$i * -420px};
    }
  }
}

.columns-grid.open:nth-child(2) {
  @for $i from 1 through 10 {
    .main-box:nth-child(#{$i}) {
      bottom: -50px;
      left: #{$i * 54px * 3};
    }
  }
}

.columns-grid:nth-child(3) {
  .main-box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @for $i from 1 through 10 {
    .main-box:nth-child(#{$i}) {
      bottom: #{$i * -420px};
    }
  }
}

.columns-grid.open:nth-child(3) {
  @for $i from 1 through 10 {
    .main-box:nth-child(#{$i}) {
      bottom: -50px;
      // left: #{$i * 54px};
      margin-left: 54px;
      left: #{$i * 54px * 3};
      transform: translate(0%, 0);
    }
  }
}

.columns-grid:nth-child(4) {
  .main-box {
    position: absolute;
    right: 50px;
    transition: all 1.2s ease;
  }

  @for $i from 1 through 10 {
    .main-box:nth-child(#{$i}) {
      bottom: #{$i * -420px};
    }
  }
}

.columns-grid.open:nth-child(4) {
  @for $i from 1 through 10 {
    .main-box:nth-child(#{$i}) {
      bottom: -50px;
      right: auto;
      margin-left: 54px * 2;
      left: #{$i * 54px * 3};
    }
  }
}

@media (min-width: 1536px) {
  .columns-grid .image-box {
    height: 350px;
    width: 400px;
  }
  .activeImage .image-box {
    height: 530px !important;
    width: 560px !important;
  }

  .columns-grid.open {
    .activeImage.main-box {
      position: absolute;
      height: 530px !important;
      width: 560px !important;
    }
  }
}

@media (max-width: 991px) {
  .columns-grid .main-box {
    width: 250px;
  }
  .columns-grid .image-box {
    height: 320px;
    width: 250px;
  }

  .columns-grid .main-box.open .image-box {
    height: 30px;
    width: 30px;
  }
}

@media (max-width: 767px) {
  .columns-grid .main-box {
    width: 250px;
  }
  .columns-grid .image-box {
    height: 320px;
    width: 250px;
  }

  .columns-grid .main-box.open .image-box {
    height: 35px;
    width: 35px;
  }
  .activeImage .image-box {
    height: 330px !important;
    width: 260px !important;
  }

  .columns-grid.open {
    .activeImage.main-box {
      position: absolute;
      height: 330px !important;
      width: 260px !important;
    }
  }
  .columns-grid:nth-child(2) {
    .main-box {
      left: 10px;
    }

    @for $i from 1 through 10 {
      .main-box:nth-child(#{$i}) {
        bottom: #{$i * -420px};
      }
    }
  }

  .columns-grid.open:nth-child(2) {
    @for $i from 1 through 10 {
      .main-box:nth-child(#{$i}) {
        bottom: -50px;
        left: #{$i * 40px * 2};
      }
    }
  }

  .columns-grid:nth-child(3) {
    .main-box {
      left: unset;
      transform: unset;
      right: 40px;
    }

    @for $i from 1 through 10 {
      .main-box:nth-child(#{$i}) {
        bottom: #{$i * -420px};
      }
    }
  }

  .columns-grid.open:nth-child(3) {
    @for $i from 1 through 10 {
      .main-box:nth-child(#{$i}) {
        right: auto;
        margin-left: 40px;
        left: #{$i * 40px * 2};
      }
    }
  }
}

.details {
  padding-top: 10px;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  transition: all 0.5s 0.5s ease;
  opacity: 1;
  margin: 0 20px;
  margin-bottom: 50px;
}

.open .details {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
