import { defineStore } from "pinia";

export const useStudyStore = defineStore('use-study-store', {
  state: () => ({
    foodName : '',
    foodList : [],
    foodPrice : 0
  })
})