<template>
  <div>
    <b-navbar toggleable>
      <b-navbar-brand href="#" @click="setIndex(0)" :class="linkClass(0)"
          >Ring</b-navbar-brand
        >
      <b-nav>
        <b-nav-item href="#" @click="setIndex(1)" :class="linkClass(1)"
          >Factory</b-nav-item
        >
        <b-nav-item href="#" @click="setIndex(2)" :class="linkClass(2)"
          >Land</b-nav-item
        >
        <b-nav-item href="#" @click="setIndex(3)" :class="linkClass(3)"
          >Market</b-nav-item
        >
        <b-nav-item href="#" @click="setIndex(4)" :class="linkClass(4)"
          >Score Board</b-nav-item
        >
        <b-nav-item>{{ "Clock in here " }}</b-nav-item>
      </b-nav>
      <b-navbar-toggle target="navbar-toggle-collapse" style="margin-left: 15px;">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item style="text-align:left; padding-left: 10px;" href="#">{{ username + " | " + email }}</b-nav-item>
          <b-nav-item style="text-align:left; padding-left: 10px;" href="#">
            <button class="btn btn-danger text-light" @click="logout">Logout</button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container m-0 p-0">
      <div v-show="idx == 0">
        {{ "Welcome" + username }}
      </div>
      <factory v-show="idx == 1" />
      <land v-show="idx == 2" />
      <market v-show="idx == 3" />
      <scoreboard v-show="idx == 4" />
    </div>
  </div>
</template>

<script>
import Factory from "./Factory.vue";
import Land from "./Land.vue";
import Market from "./Market.vue";
import Scoreboard from "./Scoreboard.vue";
export default {
  components: { Factory, Land, Market, Scoreboard },
  name: "Dashboard",
  data() {
    return {
      username: undefined,
      email: undefined,
      idx: 0,
    };
  },
  methods: {
    setIndex(index) {
      this.idx = index;
    },
    linkClass(index) {
      if (this.idx === index) {
        return ["bg-warning", "text-dark"];
      } else {
        return ["bg-light", "text-dark"];
      }
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>