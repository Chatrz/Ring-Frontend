<template>
    <div class="m-auto w-75 mt-5">
        <h1 class="mt-3 mb-3">لیست کاربران</h1>
        <div v-for="singleTeam in teams" :key="singleTeam">
            <b-table hover :items="getTeamMembers(singleTeam)" :fields="fields" class="mt-3 mb-3 table-striped"></b-table>
        </div>
    </div>
</template>

<script>
export default {
  name: "UsersTable",
  data() {
    return {
      fields: [
        {
          key: 'team',
          label: 'تیم'
        },
        {
          key: 'name',
          label: 'نام کاربر'
        },
        {
          key: 'email',
          label: 'ایمیل کاربر'
        }
      ],
      users: [
        { team: "Alpha", name: "Ali", email: "Mai1l" },
        { team: "Alpha2", name: "Ali2", email: "Mail2" },
        { team: "Alpha2", name: "Ali1", email: "Mail3" },
        { team: "Alpha", name: "Ali1", email: "Mail" },
      ],
      teams: ["Alpha", "Alpha2"],
    };
  },
  methods: {
      getTeamMembers(team_name) {
          return this.users.filter(function(e) {
              return e.team == team_name;
          });
      }
  }
};
</script>

<style scoped>
th, td {
  padding: 8px 16px;
}
</style>