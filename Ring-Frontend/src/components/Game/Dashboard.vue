<template>
  <div class="hello">
    <h1>Welcome to regular users page</h1>
    <h2>{{ msg }}</h2>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      msg: "The commoners",
      username: undefined,
      email: undefined,
    };
  }
};
</script>

<style scoped>

</style>