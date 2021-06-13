<template>
  <div>
    <div class="text-center mt-5 mb-5 pt-2 pb-2">
      <span class="clock-text" style="direction: ltr">{{ getTime }}</span>
    </div>
    <b-form class="text-center" inline>
      <label for="h-input">ساعت :</label>
      <b-form-input
        id="h-input"
        class="mb-2 mr-sm-2 mb-sm-0 sm-width"
        v-model="inputH"
      ></b-form-input>
      <label for="m-input">دقیقه :</label>
      <b-form-input
        id="m-input"
        class="mb-2 mr-sm-2 mb-sm-0 sm-width"
        v-model="inputM"
      ></b-form-input>
      <b-button
        variant="primary"
        class="mr-5"
        @click="updateChange"
        style="margin-right: 20px"
        >اعمال تغییرات</b-button
      >
    </b-form>
    <div class="text-center mt-5">
      <b-button
        lg="4"
        @click="stopGame"
        :class="[
          { 'btn-danger': !pause, 'btn-success': pause },
          'mt-5',
          'btn',
          'btn-lg',
        ]"
        >{{ pause ? "ادامه بازی" : "بازی را نگه دار" }}</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Competetion timer setup.
   * 
   */
  name: "Timer",
  data() {
    return {
      inputH: "0",
      inputM: "0",
      hour: 2,
      minute: 59,
      second: 59,
      pause: false,
      restart: false,
      timeFunction: "",
    };
  },
  methods: {
    countDownTimer() {
      if (this.second > 0 || this.minute > 0 || this.hour > 0) {
        this.timeFunction = setTimeout(() => {
          if (!this.pause) {
            this.tikTok();
          }
          this.countDownTimer();
        }, 1000);
      }
    },
    tikTok() {
      if (this.second == 0) {
        if (this.minute == 0) {
          this.hour -= 1;
          this.minute = 59;
        } else {
          this.minute -= 1;
        }
        this.second = 59;
      } else {
        this.second -= 1;
      }
    },
    updateChange() {
      this.pause = true;
      let hour = parseInt(this.inputH);
      let minute = parseInt(this.inputM);
      if (minute > 60 || minute < 0) return;
      this.hour = hour;
      this.minute = minute;
      this.second = 59;
      this.pause = false;
    },
    stopGame() {
      clearTimeout(this.timeFunction);
      this.pause = !this.pause;
      this.countDownTimer();
    },
  },
  created() {
    this.countDownTimer();
  },
  computed: {
    getTime() {
      return this.second + " : " + this.minute + " : " + this.hour;
    },
  },
};
</script>

<style scoped>
.clock-text {
  font-size: 42px;
  font-weight: bold;
}

.sm-width {
  width: 100px;
  display: inline-block;
}
</style>