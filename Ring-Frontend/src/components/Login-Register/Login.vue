<template>
  <div class="h-100 blue-login-background">
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <b-icon icon="gear-fill" animation="spin" font-scale="5"></b-icon>
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
                placeholder="نام کاربری"
                required
                autofocus
              />
              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="رمز عبور"
                class="form-control form-group mt-3"
                required
              />
              <input
                class="btn btn-lg btn-primary btn-block btn-signin mt-3 subbtn"
                type="submit"
                value="ورود"
                @click="validateForm"
              />
            </form>
            <div class="mt-3 " v-if="has_errors">
              <div v-for="error in errors" :key="error">
                {{ error }}
              </div>
            </div>
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
      has_errors: false,
      errors: [],
    };
  },
  methods: {
    sendLogInForm() {
      console.log(this.username + " " + this.password);
    },
    validateForm() {
      this.errors = [];
      this.has_errors = false;
      if (this.username == "")
        this.errors.push("لطفا نام کاربری را وارد کنید");
      if (this.password == "")
        this.errors.push("لطفا رمز خود را وارد کنید");
      if (this.errors.length > 0)
        this.has_errors = true;
    }
  },
};
</script>

<style>
.h-80 {
  height: 80vh;
}

.subbtn {
  background: #f07c00ff;
  color: #ffffff;
  border-color: #f07c00ff;
  outline: none;
}

.subbtn:hover {
  background: #ffffff;
  color: #f07c00ff;
}
</style>
