<template>
  <div>
    <b-navbar toggleable class="bg-dark">
      <b-navbar-brand href="#" @click="setIndex(0)">
        <img
          src="../../assets/Logo.svg"
          style="width: 50px; height: 50px"
          class="rounded-circle"
        />
      </b-navbar-brand>
      <b-nav>
        <b-nav-item href="#" @click="setIndex(1)" :class="linkClass(1)"
          ><span class="default">خط تولید</span></b-nav-item
        >
        <b-nav-item href="#" @click="setIndex(2)" :class="linkClass(2)"
          ><span class="default">زمین</span></b-nav-item
        >
        <b-nav-item href="#" @click="setIndex(3)" :class="linkClass(3)"
          ><span class="default">بازار</span></b-nav-item
        >
        <b-nav-item href="#" @click="setIndex(4)" :class="linkClass(4)"
          ><span class="default">جدول امتیازها</span></b-nav-item
        >
        <b-nav-item class="navlink default-clk"
          ><span class="default-clk">{{ "02:59:59" }}</span></b-nav-item
        >
      </b-nav>
      <b-navbar-toggle
        target="navbar-toggle-collapse"
        style="margin-left: 15px"
        class="bg-light"
      >
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            style="text-align: left; padding-left: 10px;"
            href="#"
          >
            <span style="color: #ffffff;">{{ "نام کاربری" + " | " + "ایمیل" }}</span>
          </b-nav-item>
          <b-nav-item style="text-align: left; padding-left: 10px" href="#">
            <button class="btn btn-danger text-light" @click="logout">
              خروج
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="m-0 p-0 admin-bg w-100" style="height: 100vh">
      <main-panel class="admin-bg pb-5" v-show="idx == 0" />
      <factory class="admin-bg pb-5" v-show="idx == 1" />
      <land class="admin-bg pb-5" v-show="idx == 2" />
      <market class="admin-bg pb-5" v-show="idx == 3" />
      <scoreboard class="admin-bg pb-5" v-show="idx == 4" />
    </div>
  </div>
</template>

<script>
import Factory from "./Factory.vue";
import Land from "./Land.vue";
import MainPanel from './MainPanel.vue';
import Market from "./Market.vue";
import Scoreboard from "./Scoreboard.vue";
export default {
  components: { Factory, Land, Market, Scoreboard, MainPanel },
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
        return ["selectedLink", "navlink"];
      } else {
        return ["normalLink", "navlink"];
      }
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.selectedLink {
  background: #f07c00ff;
  color: #ffffff;
}

.normalLink {
  background: #ffffff;
  color: #000000;
}

.default {
  color: #000000;
}

.default-clk {
  color: #ffffff;
  background: rgb(218, 117, 10);
}

.default-clk:hover {
  background: #f07c00ff;
}

.normalLink:hover {
  background: #adadad;
}

.navlink {
  padding: 0 4px;
  border: 0px solid black;
  border-radius: 5px;
  margin: 0 5px;
}

.admin-bg {
  background: #f07c00ff;
  background-image: linear-gradient(
    to bottom,
    rgb(206, 106, 0),
    rgba(255, 163, 65, 0.712)
  );
}
</style>