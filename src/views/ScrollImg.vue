<template>
  <div class="scroll-img" id="scroll-img">
    <div>
      <h2 class="up-title" :class="classState">Jack Ruthless</h2>
      <h2 class="down-title" :class="classState">Jack Ruthless</h2>

      <div
        v-if="activeImage"
        :key="activeImage"
        class="active"
        :class="classState"
      >
        <div class="activeTitle">{{ activeTitle }}</div>

        <div class="close-btn">
          <img
            @click="changeclassState(null)"
            :src="require('@/assets/arrow.svg')"
            alt=""
          />
        </div>

        <!-- <img :src="require('@/assets/img/' + activeImage + '.jpg')" alt="" /> -->
        <transition-group tag="div" name="act" :duration="1000">
          <div class="active-details">
            <span>{{ activeDetails }}</span>

            <span>{{ activeDate }}</span>
          </div>
        </transition-group>
      </div>
    </div>

    <div class="grid-container" :class="classState">
      <section class="grid" :class="classState">
        <transition-group
          tag="div"
          name="list"
          :duration="1000"
          class="columns-grid triangle0 hidden"
          :class="classState"
        >
          <ImageBox
            v-for="num in list1"
            :key="num"
            :num="num"
            :classState="classState"
            @click="changeclassState(num)"
          />
        </transition-group>
        <transition-group
          tag="div"
          name="list"
          :duration="1000"
          class="columns-grid triangle1"
          :class="classState"
        >
          <ImageBox
            v-for="num in list1"
            :key="num"
            :num="num"
            :classState="classState"
            @click="changeclassState(num)"
          />
        </transition-group>
        <transition-group
          tag="div"
          name="list"
          :duration="1000"
          class="columns-grid triangle2"
          :class="classState"
        >
          <ImageBox
            v-for="num in list2"
            :key="num"
            :num="num"
            :theactive="activeImage"
            :classState="classState"
            @click="changeclassState(num)"
          />
        </transition-group>
        <transition-group
          tag="div"
          name="list"
          :duration="1000"
          class="columns-grid triangle3"
          :class="classState"
        >
          <ImageBox
            v-for="num in list3"
            :key="num"
            :num="num"
            :classState="classState"
            @click="changeclassState(num)"
          />
        </transition-group>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageBox from "@/components/ImageBox.vue";

import { defineComponent, onMounted, ref } from "vue";
import { theActive } from "@/store";

export default defineComponent({
  components: {
    ImageBox,
  },
  setup() {
    let classState = ref("close");
    let activeImage = ref(4);
    let activeDetails = ref(null);
    let activeDate = ref(null);
    let activeTitle = ref(null);
    let list1 = [
      {
        image: 19,
        title: "CYBER BLUE",
        date: "2011",
        details:
          "MY BRAIN SAYS I'M RECEIVING PAIN A LACK OF OXYGEN FROM MY LIFE SUPPORT MY IRON LUNG",
      },
      {
        image: 2,
        title: "NOSTIC WILL",
        date: "2015",
        details:
          "THE HEAD SHRINKERS THEY WANT EVERYTHING MY UNCLE BILL MY BELISHA BEACON",
      },
      {
        image: 3,
        title: "LUCKY WOOD",
        date: "2019",
        details:
          "FAITH, YOU'RE DRIVING ME AWAY YOU DO IT EVERY DAY YOU DON'T MEAN IT BUT IT HURTS LIKE HELL",
      },
      {
        image: 10,
        title: "GNOSTIC WILL",
        date: "2012",
        details:
          "THE HEAD SHRINKERS THEY WANT EVERYTHING MY UNCLE BILL MY BELISHA BEACON",
      },
      {
        image: 11,
        title: "BOLD HUMAN",
        date: "2041",
        details:
          "WE'RE TOO YOUNG TO FALL ASLEEP TOO CYNICAL TO SPEAK WE ARE LOSING IT CAN'T YOU TELL?",
      },
      {
        image: 12,
        title: "GOOD EARTH",
        date: "2020",
        details:
          "WE SCRATCH OUR ETERNAL ITCH A TWENTIETH CENTURY BITCH AND WE ARE GRATEFUL FOR OUR IRON LUNG",
      },
    ];

    let list2 = [
      {
        image: 4,
        title: "CYBER BLUE",
        date: "2013",
        details:
          "THIS, THIS IS OUR NEW SONG JUST LIKE THE LAST ONE A TOTAL WASTE OF TIME MY IRON LUNG",
      },
      {
        image: 5,
        title: "EMPTY WORDS",
        date: "2021",
        details:
          "SUCK, SUCK YOUR TEENAGE THUMB TOILET TRAINED AND DUMB WHEN THE POWER RUNS OUT WE'LL JUST HUM",
      },
      {
        image: 20,
        title: "LONE CONE",
        date: "2016",
        details:
          "AND IF YOU'RE FRIGHTENED YOU CAN BE FRIGHTENED YOU CAN BE, IT'S OK",
      },
      {
        image: 16,
        title: "HALF LIFE",
        date: "2014",
        details:
          "UP ON THE ROOFTOPS OUT OF REACH TRICKSTER IS MEANINGLESS TRICKSTER IS WEAK",
      },
      {
        image: 17,
        title: "LOVE BOAT",
        date: "2015",
        details:
          "I WANTED YOU SO BAD THAT I COULDN'T SAY ALL THESE THINGS FALL APART",
      },
      {
        image: 18,
        title: "DUTCH GREEN",
        date: "2017",
        details: "HE'S TALKING OUT THE WORLD TALKING OUT THE WORLD",
      },
    ];

    let list3 = [
      {
        image: 7,
        title: "VALLEY HILL",
        date: "2018",
        details: "WE WANTED OUT SO BAD WE COULDN'T SAY THESE THINGS FALL APART",
      },
      {
        image: 8,
        title: "FAKE CAKE",
        date: "2017",
        details:
          "AMBITION MAKES YOU LOOK PRETTY UGLY KICKING AND SQUEALING, GUCCI LITTLE PIGGY",
      },
      {
        image: 9,
        title: "GOLDEN RAY",
        date: "2016",
        details:
          "LONG WHITE GLOVES POLICE TREAD CAREFULLY ESCAPED FROM THE ZOO THE PERFECT CHILD FACSIMILE IS",
      },
      {
        image: 22,
        title: "TULIP HEAT",
        date: "2011",
        details: "WHAT'S THAT? I MAY BE PARANOID, BUT NOT AN ANDROID",
      },
      {
        image: 23,
        title: "COLD BLOOD",
        date: "2011",
        details:
          "TRUANT KIDS A CAN OF BRICK DUST WORMS WHO DO NOT WANT TO CLIMB DOWN FROM THEIR CHESTNUT TREE",
      },
      {
        image: 24,
        title: "KALE HALE",
        date: "2019",
        details:
          "PLEASE COULD YOU STOP THE NOISE? I'M TRYING TO GET SOME REST FROM ALL THE UNBORN CHICKEN VOICES IN MY HEAD",
      },
    ];
    const theActivedata = theActive();
    function changeclassState(imageNum) {
      if (imageNum !== null) {
        classState.value = "open";

        activeImage.value = imageNum.image;
        activeDetails.value = imageNum.details;
        activeDate.value = imageNum.date;
        activeTitle.value = imageNum.title;
        // document.querySelector("#scroll-img").style.height = "100vh";
        document.querySelector("body").style.overflowY = "hidden";

        theActivedata.changeData(imageNum);

        return;
      }

      if (classState.value == "close") {
        // document.querySelector("#scroll-img").style.height = "100vh";
        classState.value = "open";
        return;
      }
      if (classState.value == "open") {
        classState.value = "close";
        document.querySelector("body").style.overflowY = "scroll";

        theActivedata.changeData(null);

        setTimeout(() => {
          scrollImags();
        }, 1200);
      }
    }

    function scrollImags() {
      let tri0 = document.getElementsByClassName("close triangle0")[0];
      let tri1 = document.getElementsByClassName("close triangle1")[0];
      let tri2 = document.getElementsByClassName("close triangle2")[0];
      let tri3 = document.getElementsByClassName("close triangle3")[0];

      let tri1XInitial = tri0.getBoundingClientRect().y;

      tri1.style.transform = tri1.getBoundingClientRect().height * -1 + "px";
      tri3.style.transform = tri1.getBoundingClientRect().height * -1 + "px";

      document.querySelector("#scroll-img").style.height =
        tri0.getBoundingClientRect().height + "px";

      window.addEventListener("scroll", function () {
        let total = document.body.scrollHeight;

        let current = window.scrollY;

        let per = current / total;

        tri1.style.transform = `translateY(${
          -(tri1XInitial * per * 1.4) + tri1XInitial + "px"
        })`;

        tri3.style.transform = `translateY(${
          -(tri1XInitial * per * 1.4) + tri1XInitial + "px"
        })`;

        tri2.style.transform = `translateY(${
          tri1XInitial * per * 1.4 + 50 + "px"
        })`;
      });
    }
    onMounted(() => {
      console.log("test1");
      scrollImags();
    });

    return {
      classState,
      changeclassState,
      list1,
      list2,
      list3,
      activeImage,
      activeDetails,
      activeDate,
      activeTitle,
      // theActivedata,
    };
  },
});
</script>

<style lang="scss">
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
  /* height: 650vh; */
  overflow: hidden;
}

h2 {
  font-size: 9rem;
  font-weight: lighter;
  text-align: center;
  width: 100%;
  transition: all 0.5s ease-in;
  pointer-events: none;
}
.up-title {
  position: fixed;
  top: -100px;
  z-index: 3;
}
.up-title.open {
  position: fixed;
  top: -200px;
}
.down-title {
  position: fixed;
  bottom: -90px;
  z-index: 3;
}
.down-title.open {
  position: fixed;
  bottom: -200px;
}

.active {
  position: fixed;
  width: 70%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  transition: all 0.5s ease-in;
  overflow: hidden;
  z-index: 3;
  margin: 0 15%;
  pointer-events: none;
  opacity: 0;
  top: -30%;
  .active-details {
    width: 200px;
    padding: 10px;
    height: 300px;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
  }
  .close-btn {
    width: 190px;
    padding: 10px;
    margin-top: 80px;
    height: 400px;
    text-align: right;
    img {
      cursor: pointer;
      height: 15px;
      margin-top: 40px;
      pointer-events: stroke;

      /* padding-right: 30%; */
      width: auto;
    }
  }
  .activeTitle {
    position: absolute;
    top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 3rem;
    transition: all 1s ease-in;
  }
}

.active.open {
  opacity: 1;
  top: 0%;
}

.grid-container {
  position: fixed;
  height: 100vh;
}

.grid {
  width: 100vw;
  position: relative;
}

.grid.open {
  height: 100vh;
}
.columns-grid {
  position: absolute;
  width: calc(100%);
  transition: transform 1s ease-in-out;
}

.columns-grid.hidden {
  transform: translateY(-75%);
  opacity: 0;
}
.columns-grid:nth-child(2) {
  transform: translateY(-75%);
  z-index: 30;
}
.columns-grid:nth-child(3) {
  margin-top: 60px;
  z-index: 20;
}
.columns-grid:nth-child(4) {
  transform: translateY(-75%);
  z-index: 10;
}
.columns-grid:nth-child(4):hover {
  transform: translateY(-75%);
  z-index: 40;
}
.columns-grid.open {
  transform: translateY(0%) !important;
  pointer-events: none;
  height: 100vh;
}

.columns-grid.open.open:nth-child(1) {
  transform: translateY(0%) !important;
}

.columns-grid.open:nth-child(3) {
  margin-top: 0px;
}

@media (min-width: 1536px) {
  h2 {
    font-size: 15rem;
  }

  .up-title {
    top: -150px;
  }

  .down-title {
    bottom: -150px;
  }

  .up-title.open {
    top: -250px;
  }

  .down-title.open {
    bottom: -250px;
  }

  .grid {
    width: 80vw;
    padding: 0 10vw;
  }
  .active {
    width: 60%;
    margin: 0 20%;

    .active-details {
      margin-top: 120px;
    }
    .close-btn {
      margin-top: 120px;

      img {
        margin-top: 80px;
      }
    }
    .activeTitle {
      top: 50px;

      font-size: 4rem;
    }
  }
}

@media (max-width: 991px) {
  .scroll-img {
    height: 450vh;
  }
  .grid {
    gap: 1rem;
  }
  .grid-container {
    padding: 0 1rem;
  }

  .columns-grid {
    gap: 1rem;
  }

  h2 {
    font-size: 7rem;
  }

  .up-title {
    top: -80px;
  }

  .down-title {
    bottom: -80px;
  }
  .active {
    width: 100%;
    margin: 0%;

    .active-details {
      margin-top: 80px;
      padding: 2px;
    }
    .close-btn {
      margin-top: 80px;
    }
    .activeTitle {
      top: 50px;

      font-size: 4rem;
    }
  }
}

@media (max-width: 767px) {
  .scroll-img {
    height: 350vh;
  }
  h2 {
    font-size: 3rem;
  }

  .up-title {
    top: -30px;
  }

  .down-title {
    bottom: -30px;
  }

  .columns-grid:nth-child(4) {
    display: none;
  }

  .active {
    width: 100%;
    margin: 0%;

    .active-details {
      margin-top: 80px;
      padding: 2px;
      width: 150px;
      padding-right: 10px;
    }
    .close-btn {
      margin-top: 80px;
    }
    .activeTitle {
      top: 50px;
      font-size: 1.7rem;
      padding-left: 20px;
    }
  }
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
  opacity: 0;
}

.act-move, /* apply transition to moving elements */
.act-enter-active,
.act-leave-active {
  transition: all 0.5s ease-in-out;
}

.act-enter-from,
.act-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.act-leave-active {
  position: absolute;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>
