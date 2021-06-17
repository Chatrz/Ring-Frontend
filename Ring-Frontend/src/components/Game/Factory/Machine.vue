<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="d-flex align-items-center">
      <div class="gray-box"></div>
      <b-icon
        animation="cylon"
        icon="arrow-left-square-fill"
        v-if="active"
      ></b-icon>
      <b-icon icon="x-circle" v-else></b-icon>
    </div>
    <div
      class="bg-primary rounded d-flex justify-content-evenly align-items-center"
      style="width: 400px; height: 120px; margin: 0px 20px"
    >
      <b-icon icon="box" animation="throb" font-scale="2"></b-icon>
      <b-icon icon="tools" animation="fade" font-scale="2"></b-icon>
      <b-icon
        icon="gear-wide-connected"
        animation="spin"
        font-scale="2"
      ></b-icon>
      <b-icon icon="gear-fill" animation="spin-reverse" font-scale="2"></b-icon>
      <b-icon icon="hammer" animation="cylon-vertical" font-scale="2"></b-icon>
      <b-icon icon="gear-wide" animation="spin" font-scale="2"></b-icon>
    </div>
    <div class="d-flex align-items-center">
      <b-icon animation="cylon" icon="arrow-left" v-if="active"></b-icon>
      <b-icon icon="x-circle" v-else></b-icon>
      <div class="gray-box rounded"></div>
      <b-icon animation="cylon" icon="arrow-left" v-if="active"></b-icon>
      <b-icon icon="x-circle" v-else></b-icon>
    </div>
    <div
      class="bg-danger rounded d-flex justify-content-evenly align-items-center"
      style="width: 400px; height: 120px; margin: 0px 20px"
    >
      <b-icon icon="gear-fill" animation="spin-reverse" font-scale="2"></b-icon>
      <b-icon
        icon="gear-wide-connected"
        animation="spin"
        font-scale="2"
      ></b-icon>
      <b-icon icon="wrench" animation="spin-pulse" font-scale="2"></b-icon>
      <b-icon icon="gear-fill" animation="spin" font-scale="2"></b-icon>
      <b-icon icon="brush" animation="cylon" font-scale="2"></b-icon>
      <b-icon icon="arrow-repeat" animation="spin" font-scale="2"></b-icon>
    </div>
    <div class="d-flex align-items-center">
      <b-icon
        animation="cylon"
        icon="arrow-left-square-fill"
        v-if="active"
      ></b-icon>
      <b-icon icon="x-circle" v-else></b-icon>
      <div class="gray-box rounded-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Machine",
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style scoped>
.gray-box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: gray;
  margin-right: 20px;
  margin-left: 20px;
}
</style>