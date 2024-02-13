import { defineStore } from "pinia";

//buttonDisable
export const useButtonDisable = defineStore("buttonDisable", {
  state: () => ({
    isStateActive: true,
  }),
  actions: {
    trueState() {
      this.isStateActive = true;
    },
    falseState() {
      this.isStateActive = false;
    },
    toggleState() {
      this.isStateActive = !this.isStateActive;
    },
  },
});
