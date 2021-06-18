<template>
  <div>
    <b-icon
      icon="diagram3-fill"
      font-scale="5"
      style="
        color: #f07c00ff;
        width: 800px;
        height: 800px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 50px;
        top: 50px;
        text-overflow: ellipsis;
      "
    ></b-icon>
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