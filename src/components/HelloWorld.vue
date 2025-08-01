<script setup lang="ts">
import { ref } from 'vue'
import { useStudyStore } from '../store/use-study-store';

const studyStore = useStudyStore();

const handleClick = () => {
  studyStore.foodPrice += 100
}

</script>

<template>

  <div class="card">
    <button type="button" @click="handleClick">클릭</button>
    <div>
      가격 : {{ studyStore.foodPrice }}
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
