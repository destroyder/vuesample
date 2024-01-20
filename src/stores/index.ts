import { defineStore } from 'pinia'

//buttonDisable
export const useButtonDisable = defineStore('buttonDisable', {
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


// richCheckbox
export const useRichCheckbox = defineStore('richCheckbox', {
  state: () => ({
    isContactChecked: false,
    isCompanyChecked: false,
  }),
  actions: {
    trueContactState() {
      this.isContactChecked = true;
    },
    falseContactState() {
      this.isContactChecked = false;
    },
    trueCompanyState() {
      this.isCompanyChecked = true;
    },
    falseCompanyState() {
      this.isCompanyChecked = false;
    }
  },
});
