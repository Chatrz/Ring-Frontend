<template>
  <div class="m-auto w-75 mt-5">
    <h1 class="mt-3 mb-3">لیست کاربران</h1>
    <div v-for="singleTeam in teams" :key="singleTeam">
      <b-table
        hover
        :items="getTeamMembers(singleTeam)"
        :fields="fields"
        class="mt-3 mb-3 table-striped"
      ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Users and teams information panel.
   * 
   */
  name: "UsersTable",
  data() {
    return {
      fields: [
        {
          key: "team",
          label: "تیم",
        },
        {
          key: "name",
          label: "نام کاربر",
        },
        {
          key: "email",
          label: "ایمیل کاربر",
        },
        {
          key: "status",
          lablel: "وضعیت اتصال"
        }
      ],
      users: [
        { team: "Alpha", name: "Ali", email: "Mai1l", status: "Online" },
        { team: "Alpha2", name: "Ali2", email: "Mail2", status: "Offline" },
        { team: "Alpha2", name: "Ali1", email: "Mail3", status: "Online" },
        { team: "Alpha", name: "Ali1", email: "Mail", status: "Online" },
      ],
      teams: ["Alpha", "Alpha2"],
    };
  },
  methods: {
    getTeamMembers(team_name) { // Sends a GET HTTP request to get the users.
      return this.users.filter(function (e) {
        return e.team == team_name;
      });
    },
  },
};
</script>

<style scoped>
th,
td {
  padding: 8px 16px;
}
</style>