<template>
  <div>
    <h4>Please Login</h4>
    <form action="" method="GET">
      <label for="username">User name</label>
      <input id="username" type="text" v-model="username" required autofocus />
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" required />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
