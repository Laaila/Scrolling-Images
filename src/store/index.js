import { defineStore } from "pinia";

export const theActive = defineStore("theActive", {
  state: () => {
    return {
      active: null,
    };
  },
  actions: {
    changeData(x) {
      console.log(x);

      if (x == null) {
        this.active = null;
      }
      if (x !== null) {
        this.active = x.image;
      }
    },
  },
});
