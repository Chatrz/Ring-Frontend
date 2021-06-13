<template>
  <div>
    <b-card no-body>
      <b-tabs card v-model="tabIndex">
        <b-tab title="فرستادن اطلاعیه" :title-item-class="linkClass(0)" :title-link-class="linkClass(0)">
          <b-card-text>
            <h1>Message</h1>
          </b-card-text>
        </b-tab>
        <b-tab title="تنظیم زمان مسابقه" :title-item-class="linkClass(1)" :title-link-class="linkClass(1)">
          <b-card-text>
            <h1>Timmer</h1>
          </b-card-text>
        </b-tab>
        <b-tab title="جدول امتیازها" :title-item-class="linkClass(2)" :title-link-class="linkClass(2)">
          <b-card-text>
            <h1>Scores</h1>
          </b-card-text>
        </b-tab>
        <b-tab title="تابع رباط مسابقه" :title-item-class="linkClass(3)" :title-link-class="linkClass(3)">
          <b-card-text>
            <h1>Bot function tab</h1>
          </b-card-text>
        </b-tab>
        <b-tab title="لیست کاربران" :title-item-class="linkClass(4)" :title-link-class="linkClass(4)">
          <b-card-text>
            <h1>List of users</h1>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AdminDash",
  data() {
    return {
      username: undefined,
      email: undefined,
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
          return ['bg-warning', 'text-light'];
        } else {
          return ['bg-light', 'text-info'];
        }
    },
  },
};
</script>
