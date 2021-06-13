<template>
  <div>
    <b-form-group
      label="ارسال پیام به کاربران :"
      label-for="admin-msg"
      description="در نوشتن پیام دقت کنید. بعد از ارسال آن امکان بازگشت  وجود ندارد."
      class="mb-0"
    >
      <b-form-textarea
        id="admin-msg"
        v-model="adminMessage"
        placeholder="متن خود را وارد کنید"
        lazy-formatter
        :formatter="formatter"
      ></b-form-textarea>
    </b-form-group>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success" @click="send">ارسال پیام</b-button>
        <b-button variant="warning" @click="clear">پاک کردن پ‍یام</b-button>
      </b-button-group>
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