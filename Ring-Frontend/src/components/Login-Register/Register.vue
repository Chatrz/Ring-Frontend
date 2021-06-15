<template>
  <div class="h-100">
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
    <b-icon
      icon="gear-fill"
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
      icon="gear-fill"
      animation="spin"
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
              id="register-form"
              @submit.prevent="sendRegisterForm"
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
                  id="name"
                  type="text"
                  v-model="name"
                  class="form-control form-group mt-3"
                  placeholder="نام کاربری"
                  required
                  autofocus
                />
              </b-input-group>
              <b-input-group class="mt-3 mb-3">
                <b-input-group-prepend>
                  <b-icon
                    icon="envelope"
                    font-scale="3"
                    style="disply: inline-block"
                  ></b-icon>
                </b-input-group-prepend>
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  class="form-control form-group mt-3"
                  placeholder="ایمیل"
                  required
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
                  class="form-control form-group mt-3"
                  placeholder="رمز عبور"
                  required
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
                  id="password-confirm"
                  type="password"
                  v-model="password_confirmation"
                  class="form-control form-group mt-3"
                  placeholder="تکرار رمز عبور"
                  required
                />
              </b-input-group>
              <input
                class="btn btn-lg btn-primary btn-block btn-signin mt-3 subbtn"
                type="submit"
                value="ثبت اطلاعات"
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
  /**
   * Register page component.
   *
   */
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
      has_errors: false,
      errors: [],
    };
  },
  methods: {
    sendRegisterForm() {
      console.log(this.name + " " + this.email);
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateForm() {
      this.errors = [];
      this.has_errors = false;
      if (this.name == "") this.errors.push("لطفا نام کاربری را وارد کنید");
      if (this.password == "") this.errors.push("لطفا رمز خود را وارد کنید");
      if (this.email == "") this.errors.push("لطفا یک ایمیل وارد کنید");
      if (this.validateEmail(this.email))
        this.errors.push("ایمیل شما معتبر نمی باشد");
      if (this.password != this.password_confirmation)
        this.errors.push("تکرار رمز عبور به اشتباه صورت گرفته است");
      if (this.errors.length > 0) this.has_errors = true;
    },
  },
};
</script>


<style>
.blue-login-background {
  background-color: #cccccc;
}
</style>

<style scoped>
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