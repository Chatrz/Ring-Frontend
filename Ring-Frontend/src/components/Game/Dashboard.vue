<template>
  <div>
    <h1>Welcome to regular users page</h1>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      username: undefined,
      email: undefined,
    };
  }
};
</script>

<style scoped>

</style>