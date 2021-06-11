<template>
  <div>
    <h1>Welcome to administrator page</h1>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  name: "AdminDash",
  data() {
    return {
      username: undefined,
      email: undefined,
    };
  },
};
</script>

<style scoped>
</style>