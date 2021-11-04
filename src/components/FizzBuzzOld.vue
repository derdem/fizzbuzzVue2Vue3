<template>
  <div class="container" :class="style">
    <h2 class="console">FizzBuzz Game - Options Api</h2>
    <div class="button-group">
      <button @click="next">Next</button>
      <button @click="reset">Reset</button>
    </div>
    <div v-for="(item, index) in output" :key="index" class="console">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import fizzbuzz from "../utils/fizzbuzz";

export default defineComponent({
  name: "Refs",
  props: {
    currentlyPlaying: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    output() {
      // Array [0 .. counter-1]
      const firstArray = [...Array(this.counter).keys()];
      // Array [1 .. counter]
      const raisedByOne = firstArray.map((x) => {
        return x + 1;
      });
      console.log(raisedByOne);
      const fizzbuzzOutput = raisedByOne.map(fizzbuzz);
      return fizzbuzzOutput;
    },
    style() {
      if (this.currentlyPlaying) {
        return { yellow: true };
      }
      return "";
    },
  },
  methods: {
    next() {
      this.counter++;
    },
    reset() {
      this.counter = 0;
      this.output = [];
    },
  },
  watch: {
    counter() {
      console.log("Options Api", fizzbuzz(this.counter));
      this.$emit("playing");
    },
  },
  mounted() {
    console.log("Game Started - Options Api");
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 400px;
  height: 600px;
}

.yellow {
  background-color: yellow;
}

.button-group {
  display: flex;
  justify-content: space-around;
}

.console {
  text-align: center;
}
</style>
