<template>
  <div>
    <b-icon
      icon="toggles"
      font-scale="5"
      style="
        color: #f07c00ff;
        width: 400px;
        height: 400px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 25px;
        top: 100px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <b-icon
      icon="tools"
      font-scale="5"
      style="
        color: #efefef;
        width: 150px;
        height: 150px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        left: 250px;
        bottom: 100px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <b-icon
      icon="nut"
      font-scale="5"
      style="
        color: #adadad;
        width: 200px;
        height: 200px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        left: 0px;
        bottom: 400px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <b-icon
      icon="hammer"
      font-scale="5"
      style="
        color: #f07c00ff;
        width: 150px;
        height: 150px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 25px;
        bottom: 100px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <h2 class="text-center mt-5 mb-4">{{ "وضعیت خط تولید :" }}</h2>
    <machine class="mb-5 mt-5" />
    <div class="text-center mt-5 mb-4 bg-light rounded m-auto w-50" style="height: 350px; padding: 20px 10px;">
      <h3 class="mb-3 text-right">
        {{ "تنظیمات کالاهای تولیدی :" }}
      </h3>
      <div v-for="type in attributes" :key="type.key" class="mb-4">
        <label v-if="type.status" :for="type.key">
          {{ type.label }}
        </label>
        <input v-if="type.status" :id="type.key" type="checkbox" v-model="choosed" :value="type.key" />
      </div>
    </div>
    <button class="d-block m-auto mt-4 btn btn-success" @click="updateChanges">
      {{ "اعمال تغییرات جدید" }}
    </button>
  </div>
</template>

<script>
import Machine from "./Machine.vue";
export default {
  /**
   * Represents an animation for creating products.
   * Also allows the users to control the products attributes.
   * 
   */
  components: { Machine },
  name: "ProductionLine",
  data() {
    return {
      attributes: [
        { key: "varanty", label: "محصول گارانتی داشته باشد", status: true },
        { key: "watersave", label: "محصول از آب کمتری استفاده کند", status: true },
        { key: "powerfull", label: "محصول دارای خصوصیات فیزیکی قوی تری باشد", status: true },
        { key: "highspeed", label: "محصول دور بر ساعت بیشتری داشته باشد", status: true },
      ],
      choosed: [],
    };
  },
  methods: {
    updateChanges() {
      console.log(this.choosed);
      this.choosed = [];
    }
  }
};
</script>

<style scoped>
</style>