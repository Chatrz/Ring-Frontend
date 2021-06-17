<template>
  <div>
    <b-nav class="pt-3 pb-3 bg-secondary d-flex justify-content-evenly">
      <b-nav-item href="#" @click="setIndex(0)" :class="linkClass(0)">
        <span class="default p-3">
          {{ "خط تولید" }}
          <b-icon icon="diagram3-fill" class="inline-icon"></b-icon>
        </span>
      </b-nav-item>
      <b-nav-item href="#" @click="setIndex(1)" :class="linkClass(1)">
        <span class="default p-3">
          {{ "انبار" }}
          <b-icon icon="box-seam" class="inline-icon"></b-icon>
        </span>
      </b-nav-item>
    </b-nav>
    <div class="m-0 p-0 w-100" style="height: 100vh">
      <production-line class="pb-5" v-show="idx == 0" />
      <warehouse class="pb-5" v-show="idx == 1" />
    </div>
  </div>
</template>

<script>
import Warehouse from "./Warehouse.vue";
import ProductionLine from "./ProductionLine.vue";
export default {
  components: { ProductionLine, Warehouse },
  name: "Factory",
  data() {
    return {
      idx: 0,
    };
  },
  methods: {
    setIndex(index) {
      // A method for navigation index
      this.idx = index;
    },
    linkClass(index) {
      // Navigation layours
      if (this.idx === index) {
        return ["selectedLink", "navlink"];
      } else {
        return ["normalLink", "navlink"];
      }
    },
  },
};
</script>

<style scoped>
.selectedLink {
  background: #f07c00ff;
  color: #ffffff;
}

.normalLink {
  background: #ffffff;
  color: #000000;
}

.default {
  color: #000000;
}

.default-clk {
  color: #ffffff;
  background: rgb(218, 117, 10);
}

.default-clk:hover {
  background: #f07c00ff;
}

.normalLink:hover {
  background: #adadad;
}

.navlink {
  padding: 0 4px;
  border: 0px solid black;
  border-radius: 5px;
  margin: 0 5px;
}

.inline-icon {
  width: 20px;
  height: 25px;
  margin-right: 10px;
}
</style>