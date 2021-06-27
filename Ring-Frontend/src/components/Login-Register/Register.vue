<template>
  <div class="h-100">
    <!-- Background -->
    <b-icon
      icon="gear-wide-connected"
      animation="spin-reverse"
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
      icon="gear-fill"
      animation="spin-reverse"
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
      icon="gear"
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
    <!-- Main container of register panel -->
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <img
              src="../../assets/Logo/Logo.svg"
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
              <!-- Register errors handling -->
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
   * This component gets user name, email, password, confirm password and then
   * sends the request to server.
   *
   */
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      has_errors: false,
      errors: [],
    };
  },
  methods: {
    sendRegisterForm(e) {
      const vm = this;
      vm.has_errors = false;
      e.preventDefault();
      let params = new URLSearchParams();
      params.append('username', this.name);
      params.append('email', this.email);
      params.append('password', this.password);
      this.$http
        .post("http://localhost:3030/", params)
        .then((response) => {
          localStorage.setItem("jwt", response.data.token); // todo: get the JWT from response
          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            this.$router.push("/Dashborad");
          }
        })
        .catch((error) => {
          vm.has_errors = true;
          console.error(error);
          alert(error.response.statusText);
          // todo: Export the correct error message from user request response
          vm.errors.push("درخواست با مشکل مواجه شد.");
        });
    },
    validateEmail(email) {
      // This method checks the email validation
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateForm() {
      // This method checks the input data validations
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
      if (!this.has_errors) this.sendRegisterForm();
    },
  },
};
</script>

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