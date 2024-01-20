<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="mb-4 pb-1">
    <h1 class="fs-4 fw-bold">{{ title }}</h1>
  </div>
</template>
