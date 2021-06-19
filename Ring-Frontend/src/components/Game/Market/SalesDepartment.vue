<template>
  <div>
    <h2 class="text-center mt-5 mb-1">
      {{ "بخش فروش محصولات" }}
    </h2>
    <div class="text-center mb-5 pb-3">
      {{ "خرید کالاهای شما توسط ربات مسابقه صورت می گیرد. توجه کنید که مقدار سود شما در بازه های زمانی مختلف مسابقه ممکن است متفاوت باشد." }}
    </div>
    <h3 class="text-center mt-2 mb-1">
      {{ "محصولات فعلی موجود در انبار:" }}
    </h3>
    <div>
      <div v-for="item in items" :key="item.key" class="d-flex justify-content-between align-self-center bg-success text-light rounded m-auto w-75 p-4 mb-1">
        <div style="flex-grow: 1; flex-basis: 0" class="m-auto">
          {{ item.label }}
        </div>
        <div style="flex-grow: 1; flex-basis: 0" class="text-center w-50 m-auto">
          <span class="bg-info text-light p-2 rounded"> 
            {{ "هزینه تمام شده: " + item.value + " $" }}
          </span>
        </div>
        <div style="flex-grow: 1; flex-basis: 0" class="text-center w-50 m-auto">
          <span class="bg-danger text-light p-2 rounded">  
          {{ "مانده: " + item.number }}
          </span>
        </div>
        <div style="flex-grow: 1; flex-basis: 0" class="text-center">
          <button type="button" class="btn btn-primary" @click="sellProduct(item.key)">
            {{ "بفروش" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesDepartment",
  data() {
    return {
      items: [
        { key: "watersaver", label: "لباس شویی کم مصرف", value: 100, number: 10 },
        { key: "normal", label: "لباس شویی عادی", value: 50, number: 20 },
        { key: "powerfull", label: "لباس شویی مقاوم", value: 120, number: 0 },
      ],
    };
  },
  methods: {
    sellProduct(key) {
      this.items.forEach(element => {
        if (element.key == key) {
          if (element.number > 0)
            element.number--;
          else
            alert("You don't have any of this item to sell.")
        }
      });
    }
  }
};
</script>

<style scoped>
</style>