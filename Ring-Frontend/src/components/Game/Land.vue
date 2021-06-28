<template>
  <div class="text-center">
    <b-icon
      icon="geo-alt"
      font-scale="5"
      style="
        color: #494949;
        width: 800px;
        height: 800px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        right: 50px;
        top: 50px;
        text-overflow: ellipsis;
      "
    ></b-icon>
    <h2 class="mt-5 mb-3" v-if="selected == null">{{ "زمین کارخانه خود را انتخاب کنید :" }}</h2>
    <h2 class="mt-5 mb-3" v-else>{{ "زمین شما انتخاب شده است." }}</h2>
    <div class="w-50 m-auto text-center mt-3 mb-5 p-4 warning-msg">
      <span class="d-block mb-3">
        {{ "مشخصات هر زمین روی آن نوشته شده است. آن ها را با دقت بخوانید و در نظر بگیرید که هر زمین متناسب با ویژگی های خود می تواند در سود حاصل از فروش کالاهای شما تغییرات ایجاد کند." }}
      </span>
      <span class="d-block alert-msg">
        {{ "در انتخاب زمین خود بسیار دقت کنید زیرا در صورت انتخاب آن امکان تغییر آن وجود نخواهد داشت و این زمین تا پایان مسابقه برای شما خواهد بود." }}
      </span
      >
    </div>
    <b-carousel
      id="landSlider"
      v-model="slide"
      class="mb-5 m-auto w-75 img-thumbnail"
      :interval="8000"
      controls
      indicators
      fade
      background="#030303"
      img-width="512"
      img-height="240"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        caption="تهران"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../../assets/Logo/Logo.svg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="اصفهان"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../../assets/Logo/Logo.svg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="کیش"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../../assets/Logo/Logo.svg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="ساری"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../../assets/Logo/Logo.svg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="زاهدان"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../../assets/Logo/Logo.svg"
      ></b-carousel-slide>
    </b-carousel>

    <button class="btn subbtn" type="button" @click="selectThisLand" v-if="selected == null">
      {{ "همین زمین را انتخاب کن" }}
    </button>
  </div>
</template>

<script>
export default {
  /**
   * The land component allows the temas to choose their land
   * of factory.
   * Using a slider to show them the lands.
   * 
   */
  name: "Land",
  data() {
    return {
      slide: 0,
      selected: null,
    };
  },
  methods: {
    selectThisLand() { // This method sends an HTTP request for selecting a land
      this.selected = this.slide;
      alert("Land " + this.selected + " choosed.");
    },
  },
};
</script>

<style scoped>
.subbtn {
  background: #f07c00ff;
  color: #ffffff;
  border-color: #f07c00ff;
  outline: none;
}

.subbtn:hover {
  background: #ffffff;
  color: #f07c00ff;
}

.alert-msg {
  background: #dc3545;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 25px;
}

.warning-msg {
  background: #1a9953;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 25px;
}
</style>