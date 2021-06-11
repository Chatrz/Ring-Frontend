<template>
  <div>
    {{ "This is " + name + " page" }}
  </div>
</template>

<script>
export default {
  name: "Factory",
  data() {
    return {};
  },
  computed: {
    name() {
      return "Factory";
    }
  }
};
</script>

<style scoped>
</style>