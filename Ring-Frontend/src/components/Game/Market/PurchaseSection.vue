<template>
  <div>
    <h2 class="text-center mt-5 mb-5">
      {{ "بخش خرید کالا" }}
    </h2>
    <div>
      <div v-for="item in items" :key="item.key" class="d-flex justify-content-between align-self-center bg-success text-light rounded m-auto w-75 p-4 mb-1">
        <div style="flex-grow: 0; flex-basis: 0; padding-left: 5px;">
          <div class="rounded-circle bg-secondary" style="width:30px; height:30px;"></div>
        </div>
        <div style="flex-grow: 1; flex-basis: 0;"> 
          {{ item.label }}
        </div>
        <div style="flex-grow: 1; flex-basis: 0;" class="text-center">
          <span style="font-size: 18px;">
            {{ item.value + " $"}}
          </span>
        </div>
        <div class="d-flex justify-content-evenly" style="flex-grow: 1; flex-basis: 0;">
          <button type="button" class="btn btn-danger" @click="decrease(item.key, item.value)">
            <b-icon icon="caret-right-fill" scale="1"></b-icon>
          </button>
          <span style="font-size: 18px;">
            {{ getItemNumber(item.key) }}
          </span>
          <button type="button" class="btn btn-danger" @click="increase(item.key, item.value)">
            <b-icon icon="caret-left-fill" scale="1"></b-icon>
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <h3 class="mt-5 mb-5">
        {{ "مبلغ کل خرید " + total + " $"}}
      </h3>
      <button type="button" class="btn btn-primary" @click="confirmPuurchase">
        {{ "ثبت خرید ها" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaseSection",
  data() {
    return {
      items: [
        { key: "door", label: "در ماشین لباس شویی", value: 5 },
        { key: "engine", label: "موتور ماشین لباس شویی", value: 5 },
        { key: "body", label: "فلزات بدنه", value: 5 },
        { key: "watersaver", label: "قابلیت مصرف آب کمتر", value: 10 },
        { key: "powerfull", label: "بدنه محکم تر", value: 15 },
      ],
      purchase: [],
      total: 0
    };
  },
  created() {
    this.items.forEach(element => {
      this.purchase[element.key] = 0;
    });
  },
  methods: {
    increase(key, value) {
      this.purchase[key]++;
      this.total += value;
    },
    decrease(key, value) {
      if (this.purchase[key] > 0)
      {
        this.purchase[key]--;
        this.total -= value;
      }
    },
    confirmPuurchase() {
      alert("Items bught.");
      this.resetFactor();
    },
    getItemNumber(key) {
      return this.purchase[key];
    },
    resetFactor() {
      this.items.forEach(element => {
        this.purchase[element.key] = 0;
        this.total = 0;
      });
    }
  },
};
</script>

<style scoped>
</style>