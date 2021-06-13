<template>
  <div>
    <div v-for="team in getTeams" :key="team['t_name']">
      <label>{{ team["t_name"] }}</label>
      <b-form inline>
        <b-form-input v-model="team['new_score']"></b-form-input>
      </b-form>
      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="team['update']"
        >Change</b-form-checkbox
      >
    </div>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success" @click="undo">Undo Changes</b-button>
        <b-button variant="warning" @click="change">Change</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreTable",
  data() {
    return {
      teams: [
        { t_name: "Alpha", t_score: 20, update: false },
        { t_name: "Betha", t_score: 10, update: false },
        { t_name: "Gama", t_score: 50, update: false },
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