<template>
  <div class="h-100 blue-login-background-rvrs">
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <b-icon
              icon="gear-fill"
              animation="spin"
              style="color: #ffffff"
              font-scale="4"
            ></b-icon>
            <form
              class="form-signin"
              id="login-form"
              @submit.prevent="sendRegisterForm"
              method="GET"
            >
              <input
                id="name"
                type="text"
                v-model="name"
                class="form-control form-group mt-3"
                placeholder="Name"
                required
                autofocus
              />
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control form-group mt-3"
                placeholder="Email"
                required
              />
              <input
                id="password"
                type="password"
                v-model="password"
                class="form-control form-group mt-3"
                placeholder="Password"
                required
              />
              <input
                id="password-confirm"
                type="password"
                v-model="password_confirmation"
                class="form-control form-group mt-3"
                placeholder="Confirm Password"
                required
              />
              <input
                class="btn btn-lg btn-primary btn-block btn-signin mt-3 subbtn"
                type="submit"
                value="Register"
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
  methods: {
    sendRegisterForm() {
      console.log(this.name + " " + this.email);
    },
  },
};
</script>


<style>
.blue-login-background-rvrs {
  background-image: linear-gradient(to bottom right, #ffffff, #000066);
}
</style>