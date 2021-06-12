<template>
  <div class="h-100 blue-login-background">
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <div>
              <b-icon
                icon="gear-fill"
                animation="spin"
                font-scale="4"
                style="disply: inline-block"
              ></b-icon>
              <b-icon
                icon="gear-fill"
                animation="spin"
                font-scale="5"
                style="disply: inline-block; color: #f07c00ff"
              ></b-icon>
              <b-icon
                icon="gear-fill"
                animation="spin"
                font-scale="3"
                style="disply: inline-block"
              ></b-icon>
            </div>
            <form
              class="form-signin"
              id="login-form"
              @submit.prevent="sendLogInForm"
              method="GET"
            >
              <b-input-group>
                <b-input-group-prepend>
                  <b-icon
                    class="pt-15"
                    icon="person-fill"
                    font-scale="2"
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
              <b-input-group>
                <b-input-group-prepend>
                  <b-icon
                    class="pt-15"
                    icon="key-fill"
                    font-scale="2"
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
input:not([type="submit"]) {
  padding: 10px 20px;
  border: 1px solid #f07c00ff;
}

.pt-15 {
  padding-top: 15px;
}
</style>
