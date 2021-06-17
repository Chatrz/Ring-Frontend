<template>
  <div class="h-100">
    <!-- Background -->
    <b-icon
      icon="gear-fill"
      animation="spin"
      font-scale="5"
      style="
        color: #adadad;
        width: 1000px;
        height: 1000px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        left: 0px;
        top: 0px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <!-- Part of background icons -->
    <b-icon
      icon="gear-wide"
      animation="spin"
      font-scale="3"
      style="
        color: #000000;
        width: 600px;
        height: 600px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 0px;
        top: 0px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <b-icon
      icon="gear-wide-connected"
      animation="spin-reverse"
      font-scale="3"
      style="
        color: #f07c00ff;
        width: 350px;
        height: 350px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 350px;
        bottom: -50px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <!-- Main container of login panel -->
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <img
              src="../../assets/Logo.svg"
              style="width: 150px; height: 150px"
              class="rounded-circle"
            />
            <form
              class="form-signin"
              id="login-form"
              @submit.prevent="sendLogInForm"
              method="GET"
            >
              <b-input-group class="mt-3 mb-3">
                <b-input-group-prepend>
                  <b-icon
                    icon="person-fill"
                    font-scale="3"
                    style="disply: inline-block"
                  ></b-icon>
                </b-input-group-prepend>
                <input
                  id="username"
                  type="text"
                  v-model="username"
                  class="form-control form-group mt-3"
                  placeholder="نام کاربری"
                  required
                  autofocus
                />
              </b-input-group>
              <b-input-group class="mt-3 mb-3">
                <b-input-group-prepend>
                  <b-icon
                    icon="key-fill"
                    font-scale="3"
                    style="disply: inline-block"
                  ></b-icon>
                </b-input-group-prepend>
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="رمز عبور"
                  class="form-control form-group mt-3"
                  required
                />
              </b-input-group>
              <input
                class="btn btn-lg btn-primary btn-block btn-signin mt-3 subbtn"
                type="submit"
                value="ورود"
                @click="validateForm"
              />
            </form>
            <div class="mt-3" v-if="has_errors">
              <!-- Login errors handling -->
              <b-alert
                v-for="error in errors"
                :key="error"
                show
                variant="danger"
              >
                {{ error }}
              </b-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Login page component.
   * This components gets username and password and
   * then redirects user to neigher admin panel or user dashboard.
   *
   */
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
      // This method sends login HTTP request to server
      console.log(this.username + " " + this.password);
    },
    validateForm() {
      // This method checks the inputs validations
      this.errors = [];
      this.has_errors = false;
      if (this.username == "") this.errors.push("لطفا نام کاربری را وارد کنید");
      if (this.password == "") this.errors.push("لطفا رمز خود را وارد کنید");
      if (this.errors.length > 0) this.has_errors = true;
    },
  },
};
</script>

<style>
.h-80 {
  height: 80vh;
}

/* Style classes for our submit buttons */
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

<style scoped>
/* Input style classes */
input:not([type="submit"]) {
  margin-top: 0px !important;
  margin-right: 5px !important;
  padding: 10px 20px;
  border: 1px solid #f07c00ff;
}

.pt-15 {
  padding-top: 15px;
}
</style>
