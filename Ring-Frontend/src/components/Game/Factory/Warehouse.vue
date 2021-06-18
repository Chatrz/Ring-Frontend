<template>
  <div>
    <h2 class="text-center mt-5 mb-5">
      {{ "" }}
    </h2>
    <div class="m-auto w-50 mb-5 mt-3 rounded bg-light" style="padding: 20px">
      <div>
        {{ "Capacity : " + getWareInfo.capacity }}
      </div>
      <div>
        {{ "Current value : " + getWareInfo.value + " $" }}
      </div>
      <div>
        {{ "Warehouse status : " + current_capacity }}
      </div>
      <div v-show="current_capacity == getWareInfo.capacity">
        {{ "Your warehouse is full, please sell your products." }}
      </div>
    </div>
    <div class="m-auto w-50 mt-5 rounded bg-light" style="padding: 20px">
      <h4>
        {{ "Upgrade warehouse : " }}
      </h4>
      <div v-for="plan in plans" :key="plan.id">
        <span>{{
          "Capacity : " + plan.capacity + " Payment : " + plan.value
        }}</span>
        <button
          type="button"
          :class="[
            'btn',
            'btn-primary',
            'mr-3',
            { disabled: current_plan >= plan.id - 1 },
          ]"
          @click="increaseCapacity(plan.id - 1)"
        >
          {{ "Upgrage to this plan" }}
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
      current_capacity: 10,
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
      if (this.current_plan == -1)
      {
        return {id: -1, capacity: 0, value: 0}
      }
      return this.plans[this.current_plan];
    },
  },
};
</script>

<style scoped>
</style>