<template>
  <div>
    <h3 class="text-center pt-5">
      {{ "زمان باقی مانده تا پایان مسابقه " + "02:59:59" }}
    </h3>
    <div>
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
    <div class="m-auto w-50 mt-5 mb-5">
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
          <div style="text-align:left; color: #adadad;">
              {{ mesg.time }}
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPanel",
  data() {
    return {
      adminMsgs: [
        { title: "Title", content: "Content", time: "Time", priority: 1, id: 1 },
        { title: "Title", content: "Content", time: "Time", priority: 2, id: 2 },
        { title: "Title", content: "Content", time: "Time", priority: 3, id: 3 },
      ],
    };
  },
  methods: {
    getPriorityClass(number) {
      switch (number) {
        case 1:
          return "danger";
        case 2:
          return "warning";
        case 3:
          return "info";
      }
    },
  },
};
</script>
