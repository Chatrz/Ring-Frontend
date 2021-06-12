<template>
  <div class="h-100 blue-login-background">
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <p class="profile-name-card">Please Login into website</p>
            <form
              class="form-signin"
              id="login-form"
              @submit.prevent="sendLogInForm"
              method="GET"
            >
              <input
                id="username"
                type="text"
                v-model="username"
                class="form-control form-group mt-3"
                placeholder="User Name"
                required
                autofocus
              />
              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Password"
                class="form-control form-group mt-3"
                required
              />
              <input
                class="btn btn-lg btn-primary btn-block btn-signin mt-3 subbtn"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    sendLogInForm() {
      console.log(this.username + " " + this.password);
    },
  },
};
</script>

<style>
.h-80 {
  height: 80vh;
}

.blue-login-background {
  background-image: linear-gradient(to bottom right, #000066, #ffffff);
}

.subbtn {
  background: #000066;
  color: #ffffff;
  border-color: #000066;
}

.subbtn:hover {
  background: #ffffff;
  color: #000066;
}
</style>
