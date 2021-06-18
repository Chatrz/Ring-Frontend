<template>
  <div>
    <b-icon
      icon="box-seam"
      font-scale="5"
      style="
        color: #f07c00ff;
        width: 400px;
        height: 400px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        left: 0px;
        top: 50px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <b-icon
      icon="box"
      font-scale="5"
      style="
        color: #f07c00ff;
        width: 500px;
        height: 500px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 0px;
        bottom: 50px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <b-icon
      icon="box-seam"
      font-scale="5"
      style="
        color: #adadad;
        width: 300px;
        height: 300px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        left: 10px;
        bottom: 80px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <h1 class="text-center mt-5 mb-5">
      {{ "انبار" }}
    </h1>
    <div
      class="m-auto w-50 mb-5 mt-3 rounded bg-light"
      style="padding: 20px; height: 350px"
    >
      <h3 class="mb-5">
        {{ "وضعیت فعلی انبار شما :" }}
      </h3>
      <div class="m-auto mb-2 w-50">
        <div class="bg-success text-light rounded w-100" style="padding: 15px">
          {{ "ظرفیت انبار :  " + getWareInfo.capacity }}
        </div>
      </div>
      <div class="m-auto mb-2 w-50">
        <div class="bg-success text-light rounded w-100" style="padding: 15px">
          {{ "قیمت فعلی انبار :  " + getWareInfo.value + " $" }}
        </div>
      </div>
      <div class="m-auto w-50">
        <div class="bg-info text-light rounded w-100" style="padding: 15px">
          {{ "کالاهای موجود در انبار :  " + current_capacity }}
        </div>
      </div>
      <div v-show="current_capacity == getWareInfo.capacity" class="mt-3 mb-2">
        {{
          "ظرفیت انبار شما تکمیل شده است. در صورت اقدام نکردن برای ارتقای انبار یا خالی نکردن انبار کالاهای شما توسط ادمین با قیمت عادی ( بدون سود ) خریداری خواهند شد."
        }}
      </div>
    </div>
    <div class="m-auto w-50 mt-5 rounded bg-light" style="padding: 20px">
      <h4 class="mb-3">
        {{ "ارتقای انبار :" }}
      </h4>
      <div v-for="plan in plans" :key="plan.id" style="height: 50px">
        <span>
          {{ "ظرفیت :  " }}
          <b-badge
            variant="danger"
            style="color: #ffffff; background: #dc3545; padding: 6px"
          >
            {{ plan.capacity }}
          </b-badge>
          {{ "قیمت :  " }}
          <b-badge
            variant="danger"
            style="
              color: #ffffff;
              background: #dc3545;
              padding: 6px;
              margin-right: 5px;
            "
          >
            {{ plan.value }}
          </b-badge>
        </span>
        <button
          type="button"
          :class="[
            'btn',
            'btn-primary',
            'mr-3',
            'float-left',
            { disabled: current_plan >= plan.id - 1 },
          ]"
          @click="increaseCapacity(plan.id - 1)"
          style="float: left"
        >
          {{ "به همین وضع ارتقاع بده." }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Warehouse",
  data() {
    return {
      current_capacity: 25,
      current_plan: -1,
      plans: [
        { id: 1, capacity: 25, value: 200 },
        { id: 2, capacity: 50, value: 400 },
        { id: 3, capacity: 100, value: 800 },
        { id: 4, capacity: 200, value: 1600 },
        { id: 5, capacity: 500, value: 3500 },
        { id: 6, capacity: 1000, value: 7000 },
      ],
    };
  },
  methods: {
    increaseCapacity(indx) {
      this.current_plan = indx;
    },
  },
  computed: {
    getWareInfo() {
      if (this.current_plan == -1) {
        return { id: -1, capacity: 0, value: 0 };
      }
      return this.plans[this.current_plan];
    },
  },
};
</script>

<style scoped>
</style>