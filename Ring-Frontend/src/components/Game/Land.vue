<template>
  <div>
    {{ "This is " + name + " page" }}
  </div>
</template>

<script>
export default {
  name: "Land",
  data() {
    return {};
  },
  computed: {
    name() {
      return "Land";
    }
  }
};
</script>

<style scoped>
</style>