<template>
  <div class="m-auto w-50">
    <b-form-group
      label="ارسال پیام به کاربران :"
      label-for="admin-msg"
      description="در نوشتن پیام دقت کنید. بعد از ارسال آن امکان بازگشت  وجود ندارد."
      class="mb-3 mt-5"
    >
      <b-row class="m-0 p-0">
        <b-col lg="1">
          <label class="pt-2" for="message-title">عنوان :</label>
        </b-col>
        <b-col lg="11">
          <b-form-input
            id="message-title"
            type="text"
            v-model="title"
            placeholder="عنوان پیام را وارد کنید ( در حالت بدون عنوان عبارت پیام از طرف ادمین ارسال می شود )"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="m-0 p-0">
        <b-col lg="1">
          <label class="pt-2" for="message-p">ارزش :</label>
        </b-col>
        <b-col lg="11" class="pt-2">
          <b-form-input
            id="message-p"
            type="range"
            min="1"
            max="3"
            v-model="priority"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-form-textarea
        id="admin-msg"
        v-model="adminMessage"
        placeholder="متن خود را وارد کنید"
        lazy-formatter
        style="height: 200px"
      ></b-form-textarea>
    </b-form-group>
    <div class="mt-5">
      <b-button lg="4" class="ml-5 p-2" variant="success" @click="send"
        >ارسال پیام</b-button
      >
      <b-button lg="4" class="mr-5 p-2" variant="danger" @click="clear"
        >پاک کردن پ‍یام</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  /**
   * The component for sending messages to the users from Admin.
   *
   */
  name: "MessageSender",
  data() {
    return {
      title: "پیام از طرف ادمین",
      adminMessage: "",
      priority: 1,
    };
  },
  methods: {
    send() { // This method first validates the information then sends the message
      if (this.adminMessage == "") 
      {
        alert("به دلیل خالی بودن فیلد چیزی ارسال نشد.");
        return;
      }
      if (this.title == "")
      {
        this.title = "پیام از طرف ادمین";
      }
      console.log(this.adminMessage);
      alert("‍‍پیام با موفقیت ارسال شد.");
    },
    clear() { // This method clears the input values
      this.title = "";
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