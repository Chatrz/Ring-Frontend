<template>
  <div class="mt-5 pt-2">
    <div
      v-for="team in getTeams"
      :key="team['t_name']"
      class="d-flex justify-content-center"
    >
      <b-form
        inline
        class="d-flex justify-content-around mt-3 mb-3 border w-50 pt-4 pb-4 rounded bg-light border-secondery"
      >
        <label class="ml-5">{{ team["t_name"] }}</label>
        <b-form-input
          v-model="team['new_score']"
          class="d-inline-block w-25 ml-3 mr-5"
        ></b-form-input>
        <b-form-checkbox
          class="mb-2 mr-5 mb-sm-0 d-inline-block w-25 pr-3 pl-3"
          v-model="team['update']"
          size="lg"
        >تغییر داده شود ؟</b-form-checkbox>
      </b-form>
    </div>
    <div class="mt-5 text-center pt-3">
      <b-button variant="primary" @click="undo">بازگشت</b-button>
      <b-button variant="danger" @click="change">اعمال تغییرات</b-button>
    </div>
    <div class="text-center mt-3">
      <span class="alert-msg">توجه کنید که در صورت اعمال تغییرات نمی توان آن هارا به صورت قبل باز گرداند!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreTable",
  data() {
    return {
      teams: [
        { t_name: "Alpha", t_score: 20, update: false, new_score: 0 },
        { t_name: "Betha", t_score: 10, update: false, new_score: 0 },
        { t_name: "Gama", t_score: 50, update: false, new_score: 0 },
      ],
    };
  },
  created() {
    this.teams.forEach((element) => {
      element["update"] = false;
      element["new_score"] = element["t_score"];
    });
  },
  methods: {
    change() {
      this.teams.forEach((element) => {
        if (element["update"]) {
          element["t_score"] = parseInt(element["new_score"]);
          element["update"] = false;
        }
      });
    },
    undo() {
      this.teams.forEach((element) => {
        element["new_score"] = element["t_score"];
        element["update"] = false;
      });
    },
    compare(a, b) {
      if (a.t_score > b.t_score) return -1;
      if (a.t_score < b.t_score) return 1;
      return 0;
    },
  },
  computed: {
    getTeams() {
      return this.teams.sort(this.compare);
    },
  },
};
</script>

<style scoped>
.alert-msg {
  background: #dc3545;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 25px;
}
</style>