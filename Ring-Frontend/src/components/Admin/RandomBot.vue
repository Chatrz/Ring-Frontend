<template>
  <div>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-old">Old:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-old"
          size="lg"
          v-model="old_function"
          disabled
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-new">New:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-new"
          size="lg"
          v-model="new_function"
        ></b-form-input>
      </b-col>
    </b-row>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success" @click="sendFunction">Update</b-button>
        <b-button variant="info" @click="clear">Clear</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomBot",
  data() {
    return {
      new_function: "",
      old_function: "Old Function",
    };
  },
  methods: {
    sendFunction() {
      console.log(this.new_function);
    },
    clear() {
      this.new_function = "";
    },
  },
};
</script>