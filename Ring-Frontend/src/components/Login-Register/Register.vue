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
              id="register-form"
              @submit.prevent="sendRegisterForm"
              method="GET"
            >
              <input
                id="name"
                type="text"
                v-model="name"
                class="form-control form-group mt-3"
                placeholder="نام کاربری"
                required
                autofocus
              />
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control form-group mt-3"
                placeholder="ایمیل"
                required
              />
              <input
                id="password"
                type="password"
                v-model="password"
                class="form-control form-group mt-3"
                placeholder="رمز عبور"
                required
              />
              <input
                id="password-confirm"
                type="password"
                v-model="password_confirmation"
                class="form-control form-group mt-3"
                placeholder="تکرار رمز عبور"
                required
              />
              <input
                class="btn btn-lg btn-primary btn-block btn-signin mt-3 subbtn"
                type="submit"
                value="ثبت اطلاعات"
                @click="validateForm"
              />
            </form>
            <div class="mt-3" v-if="has_errors">
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
      if (this.validateEmail(this.email)) this.errors.push("ایمیل شما معتبر نمی باشد");
      if (this.password != this.password_confirmation) this.errors.push("تکرار رمز عبور به اشتباه صورت گرفته است");
      if (this.errors.length > 0) this.has_errors = true;
    },
  },
};
</script>


<style>
.blue-login-background-rvrs {
  background-image: linear-gradient(to bottom right, #ffffff, #f07c00ff);
}
</style>