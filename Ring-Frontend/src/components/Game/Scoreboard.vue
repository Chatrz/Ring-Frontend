<template>
  <div class="pt-5">
    <h2 class="text-center mt-3"> 
      {{ "جدول امتیازهای مسابقه " }}
    </h2>
    <div class="text-center mb-5" style="color: #adadad;">
      {{ " توجه کنید که جدول هر ۵ دقیقه به روزرسانی می شود " }}
    </div>
    <b-table
      striped
      dark
      hover
      :items="teams"
      :fields="fields"
      class="m-auto w-50"
    >
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
  /**
   * Showing the game score board to the users.
   * 
   */
  name: "Scoreboard",
  data() {
    return {
      fields: [
        { key: "index", label: "ردیف" },
        { key: "t_name", label: "تیم" },
        { key: "t_score", label: "امتیاز" },
      ],
      teams: [
        { t_name: "Alpha", t_score: 20 },
        { t_name: "Betha", t_score: 10 },
        { t_name: "Gama", t_score: 50 },
      ],
    };
  },
  methods: {
    updateTable() { // This method sends HTTP request to server to update the table each 5 minutes
      console.log("Update");
    }
  }
};
</script>

<style scoped>
.gold {
  background: gold;
}

.silver {
  background: silver;
}

.bronze {
  background: rgb(194, 53, 53);
}
</style>