<template>
  <div>
    <div>
      {{ hour + " : " + minute + " : " + second }}
    </div>
    <b-form inline>
      <label for="h-input">Hour</label>
      <b-form-input
        id="h-input"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="inputH"
      ></b-form-input>
      <label for="m-input">Minutes</label>
      <b-form-input
        id="m-input"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="inputM"
      ></b-form-input>
      <button variant="primary" @click="updateChange">Update</button>>
    </b-form>
    <button
      variant="primary"
      @click="stopGame"
      :value="pause ? 'GO' : 'STOP'"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputH: "0",
      inputM: "0",
      hour: 2,
      minute: 59,
      second: 59,
      pause: false,
    };
  },
  methods: {
    countDownTimer() {
      if (this.second > 0 || this.minute > 0 || this.hour > 0) {
        setTimeout(() => {
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
      this.pause = !this.pause;
    },
  },
  created() {
    this.countDownTimer();
  },
};
</script>