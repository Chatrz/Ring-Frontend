<template>
  <div class="m-auto w-50 mt-5 pt-3">
    <b-row class="my-1 mb-3">
      <b-col sm="2">
        <label for="input-old">تابع فعلی :</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-old"
          size="lg"
          v-model="old_function"
          disabled
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1 mt-3 mb-3">
      <b-col sm="2">
        <label for="input-new">تابع جدید را وارد کنید :</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-new"
          size="lg"
          v-model="new_function"
        ></b-form-input>
      </b-col>
    </b-row>
    <div class="mt-5 text-center">
      <b-button variant="success" v-show="!readyToSend" @click="toggle"
        >به روز رسانی</b-button
      >
      <b-button variant="warning" v-show="readyToSend" @click="sendFunction"
        >تغییر بده</b-button
      >
      <b-button variant="primary" v-show="readyToSend" @click="toggle"
        >بازگشت</b-button
      >
      <b-button variant="danger" @click="clear">‍پاک کردن</b-button>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * This is the application bot function that
   * is defined by admin.
   * 
   */
  name: "RandomBot",
  data() {
    return {
      new_function: "",
      old_function: "Old Function",
      readyToSend: false,
    };
  },
  methods: {
    sendFunction() {
      this.old_function = this.new_function;
      this.toggle();
      this.clear();
    },
    clear() {
      this.new_function = "";
    },
    toggle() {
      this.readyToSend = !this.readyToSend;
    },
  },
};
</script>