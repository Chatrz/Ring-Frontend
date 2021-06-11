<template>
  <div>
    <h4>Register</h4>
    <form>
      <label for="name">Name</label>
      <input id="name" type="text" v-model="name" required autofocus />
      <label for="email">E-Mail Address</label>
      <input id="email" type="email" v-model="email" required />
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" required />
      <label for="password-confirm">Confirm Password</label>
      <input
        id="password-confirm"
        type="password"
        v-model="password_confirmation"
        required
      />
      <label for="password-confirm">Is this an administrator account?</label>
      <select v-model="is_admin">
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
    };
  },
};
</script>
