<template>
  <div>
    <h2 class="text-center mt-4 mb-4">{{ "Status: On / Off" }}</h2>
    <machine />
    <div class="text-center mt-4 mb-4"> 
      {{ "Product information" }}
    </div>
  </div>
</template>

<script>
import Machine from './Machine.vue';
export default {
  components: { Machine },
  name: "ProductionLine",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>