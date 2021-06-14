<template>
  <div>
    <b-navbar>
      <b-navbar-brand href="#" @click="setIndex(0)" :class="linkClass(0)">Ring</b-navbar-brand>
      <b-nav-item href="#" @click="setIndex(1)" :class="linkClass(1)">Factory</b-nav-item>
      <b-nav-item href="#" @click="setIndex(2)" :class="linkClass(2)">Land</b-nav-item>
      <b-nav-item href="#" @click="setIndex(3)" :class="linkClass(3)">Market</b-nav-item>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">{{ username + " | " + email }}</b-nav-item>
          <b-nav-item href="#">Logout</b-nav-item>
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
    </div>
  </div>
</template>

<script>
import Factory from "./Factory.vue";
import Land from "./Land.vue";
import Market from "./Market.vue";
export default {
  components: { Factory, Land, Market },
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
    }
  },
};
</script>

<style scoped>
</style>