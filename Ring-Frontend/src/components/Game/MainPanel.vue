<template>
  <div>
    <b-icon
      icon="house-door"
      font-scale="5"
      style="
        color: #efefef;
        width: 800px;
        height: 800px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        left: 20px;
        top: 50px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <h2 class="text-center pt-5 mt-5 mb-3">
      {{ "زمان باقی مانده تا پایان مسابقه " + "02:59:59" }}
    </h2>
    <div class="mt-5 pt-4">
      <b-card
        :header="'اطلاعات شما'"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="dark"
        :footer="'امتیاز تیم شما'"
        footer-tag="footer"
        footer-bg-variant="secondary"
        footer-border-variant="dark"
        :title="'نام تیم'"
        style="max-width: 20rem"
        class="m-auto text-right mt-4"
      >
        <b-card-text class="p-5">{{ "لیست اعضای تیم" }}</b-card-text>
      </b-card>
    </div>
    <div class="m-auto w-50 mt-5 mb-5 pt-5">
      <h3 class="text-center mt-3 mb-3">اطلاعیه ها :</h3>
      <b-card-group columns>
        <b-card
          v-for="mesg in adminMsgs"
          :key="mesg.id"
          :header="mesg.title"
          :bg-variant="getPriorityClass(mesg.priority)"
          text-variant="white"
          class="m-auto w-75 mt-3 mb-2"
        >
          <b-card-text>{{ mesg.content }}</b-card-text>
          <div style="text-align: left; color: #efefef">
            {{ mesg.time }}
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * In the mail panel we show the user information about
   * its team, remaining time of the competition, and we
   * show the messages from admin.
   *
   */
  name: "MainPanel",
  data() {
    return {
      adminMsgs: [
        {
          title: "اطلاعیه ۱",
          content: "دوستان تابع رباط مسابقه تغییر یافته است.",
          time: "10:59:11",
          priority: 1,
          id: 1,
        },
        {
          title: "زمان پایان",
          content: "۲ ساعت تا پایان مسابقه زمان باقی است",
          time: "10:00:00",
          priority: 2,
          id: 2,
        },
        {
          title: "شروع مسالقه",
          content: "خوش آمدید به مسابقه رینگ.",
          time: "9:01:45",
          priority: 3,
          id: 3,
        },
      ],
    };
  },
  methods: {
    getPriorityClass(number) {
      // Get piority class
      switch (number) {
        case 1:
          return "danger";
        case 2:
          return "warning";
        case 3:
          return "info";
      }
    },
    getMessage() {
      // This method checks if message is sent from server or not
      console.log("Got message");
    },
  },
};
</script>
