<template>
    <div>
        <h1>List of users</h1>
        <div v-for="singleTeam in teams" :key="singleTeam">
            <b-table striped hover :items="getTeamMembers(singleTeam)"></b-table>
        </div>
    </div>
</template>

<script>
export default {
  name: "UsersTable",
  data() {
    return {
      users: [
        { team: "Alpha", name: "Ali", email: "Mai1l" },
        { team: "Alpha2", name: "Ali2", email: "Mail2" },
        { team: "Alpha2", name: "Ali1", email: "Mail3" },
        { team: "Alpha", name: "Ali1", email: "Mail" },
      ],
      teams: ["Alpha1", "Alpha2"],
    };
  },
  computed: {
      getTeamMembers(team_name) {
          return this.users.filter(function(e) {
              return e.team == team_name;
          });
      }
  }
};
</script>