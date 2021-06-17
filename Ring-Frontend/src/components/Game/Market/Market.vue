<template>
  <div>
    {{ "This is " + name + " page" }}
  </div>
</template>

<script>
export default {
  name: "Market",
  data() {
    return {};
  },
  computed: {
    name() {
      return "Market";
    }
  }
};
</script>

<style scoped>
</style>