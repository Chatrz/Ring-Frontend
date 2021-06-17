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
    <h2 class="mt-5 mb-5">{{ "زمین کارخانه خود را انتخاب کنید :" }}</h2>
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
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <button class="btn subbtn" type="button" @click="selectThisLand">
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
</style>