<template>
  <div>
    <h2 class="text-center mt-4 mb-4">{{ "Status: On / Off" }}</h2>
    <machine />
    <div class="text-center mt-4 mb-4">
      <div v-for="item in product" :key="'$' + item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import Machine from "./Machine.vue";
export default {
  components: { Machine },
  name: "ProductionLine",
  data() {
    return {
      product: { id: 101, type: "Normal", waterSaver: true },
    };
  },
};
</script>

<style scoped>
</style>