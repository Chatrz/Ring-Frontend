<template>
  <div>
    <b-card no-body style="height: 100vh" class="admin-bg">
      <b-tabs card v-model="tabIndex">
        <b-tab
          title="فرستادن اطلاعیه"
          :title-item-class="linkClass(0)"
          :title-link-class="linkClass(0)"
        >
          <b-card-text>
            <message-sender />
          </b-card-text>
        </b-tab>
        <b-tab
          title="تنظیم زمان مسابقه"
          :title-item-class="linkClass(1)"
          :title-link-class="linkClass(1)"
        >
          <b-card-text>
            <timer />
          </b-card-text>
        </b-tab>
        <b-tab
          title="جدول امتیازها"
          :title-item-class="linkClass(2)"
          :title-link-class="linkClass(2)"
        >
          <b-card-text>
            <score-table />
          </b-card-text>
        </b-tab>
        <b-tab
          title="تابع رباط مسابقه"
          :title-item-class="linkClass(3)"
          :title-link-class="linkClass(3)"
        >
          <b-card-text>
            <random-bot />
          </b-card-text>
        </b-tab>
        <b-tab
          title="لیست کاربران"
          :title-item-class="linkClass(4)"
          :title-link-class="linkClass(4)"
        >
          <b-card-text>
            <users-table />
          </b-card-text>
        </b-tab>
        <b-tab
          title="خروج"
          title-item-class="bg-danger text-light"
          title-link-class="bg-danger text-light"
          @click="logout"
        >
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
/* The components that are used inside Admin Dashboard Component */
import MessageSender from "./MessageSender.vue";
import RandomBot from "./RandomBot.vue";
import ScoreTable from "./ScoreTable.vue";
import Timer from "./Timer.vue";
import UsersTable from "./UsersTable.vue";
export default {
  /**
   * The 'AdminDash' is the main component of our admin panel which allows the
   * admin to acess the different parts of the panel.
   *
   */
  components: { MessageSender, Timer, UsersTable, RandomBot, ScoreTable },
  name: "AdminDash",
  /**
   * Data of the Admin Dash component.
   *
   * @param tabIndex is the admin current tab index panel
   */
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    /**
     * This method updates the tab headers while we change
     * the tab.
     *
     * @param idx is the tab index
     */
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-warning", "text-dark"];
      } else {
        return ["bg-light", "text-dark"];
      }
    },
    /**
     * This method logs the admin out from the website.
     *
     */
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.admin-bg {
  background: #f07c00ff;
  background-image: linear-gradient(to bottom right, #ffffff, #f07c00ff);
  background-image: url("../../assets/Logo.svg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>