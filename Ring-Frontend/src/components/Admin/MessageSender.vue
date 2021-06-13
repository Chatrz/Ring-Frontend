<template>
  <div class="m-auto w-50">
    <b-form-group
      label="ارسال پیام به کاربران :"
      label-for="admin-msg"
      description="در نوشتن پیام دقت کنید. بعد از ارسال آن امکان بازگشت  وجود ندارد."
      class="mb-3 mt-5"
    >
      <b-form-textarea
        id="admin-msg"
        v-model="adminMessage"
        placeholder="متن خود را وارد کنید"
        lazy-formatter
        style="height:100px;"
      ></b-form-textarea>
    </b-form-group>
    <div class="mt-5">
        <b-button lg="4" class="ml-5 p-2" variant="success" @click="send">ارسال پیام</b-button>
        <b-button lg="4" class="mr-5 p-2" variant="danger" @click="clear">پاک کردن پ‍یام</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageSender",
  data() {
    return {
      adminMessage: "",
    };
  },
  methods: {
    send() {
      console.log(this.adminMessage);
    },
    clear() {
      this.adminMessage = "";
    },
  },
};
</script>

<style scoped>
label {
  margin-bottom: 8px;
}
</style>