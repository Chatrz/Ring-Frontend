<template>
  <div id="app">
    <router-view />
    <ul class="navigation-for-test">
      <li>
        <router-link to="/" custom v-slot="{ navigate }">
          <a @click="navigate" role="link">Log</a>
        </router-link>
      </li>
      <li>
        <router-link to="/Register" custom v-slot="{ navigate }">
          <a @click="navigate" role="link">Reg</a>
        </router-link>
      </li>
      <li>
        <router-link to="/Dashboard" custom v-slot="{ navigate }">
          <a @click="navigate" role="link">Dash</a>
        </router-link>
      </li>
      <li>
        <router-link to="/AdminDash" custom v-slot="{ navigate }">
          <a @click="navigate" role="link">Admin</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /**
   * App is our main component where we use vue-routers to
   * navigate in our website parts.
   *
   */
  name: "App",
};
</script>

<style>
/* Importing bootstrap */
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

@font-face {
  font-family: "IranSans";
  src: local("IranSans"),
    url('./fonts/IRANSansWeb(FaNum).ttf') format("truetype");
}

/* Direction is Right to Left */
* {
  direction: rtl;
}

#app {
  font-family: "IranSans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  direction: rtl;
}

.navigation-for-test {
  list-style-type: none;
  position: fixed;
  bottom: 0;
}

.navigation-for-test > li {
  margin: 0 20px;
  display: inline-block;
}

.navigation-for-test > li::after {
  content: " | ";
}
</style>