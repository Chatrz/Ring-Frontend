<template>
  <div class="hello">
    <h1>Welcome to administrator page</h1>
    <h2>{{ msg }}</h2>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  name: "AdminDash",
  data() {
    return {
      msg: "The superheros",
      username: undefined,
      email: undefined,
    };
  },
};
</script>

<style scoped>
</style>