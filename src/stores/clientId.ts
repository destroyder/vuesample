import { defineStore } from "pinia";

//clientId
export const useClientId = defineStore("clientId", {
  state: () => ({
    isInputComplete: false,
  }),
  actions: {
    trueState() {
      this.isInputComplete = true;
    },
    falseState() {
      this.isInputComplete = false;
    },
    toggleState() {
      this.isInputComplete = !this.isInputComplete;
    },
  },
  persist: true,
});
