<template>
  <div>
    <b-table striped hover :items="teams" :fields="fields">
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(t_name)="data">
        {{ data.value }}
      </template>
      <template #cell(t_score)="data">
        {{ data.value }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Scoreboard",
  data() {
    return {
      fields: [
        "index",
        { key: "t_name", label: "" },
        { key: "t_score", label: "" },
      ],
      teams: [
        { t_name: "Alpha", t_score: 20 },
        { t_name: "Betha", t_score: 10 },
        { t_name: "Gama", t_score: 50 },
      ],
    };
  },
};
</script>