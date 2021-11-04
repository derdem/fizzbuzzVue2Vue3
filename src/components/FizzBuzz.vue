<template>
  <div class="container" :class="style">
    <h2 class="console">FizzBuzz Game - Composition Api</h2>
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
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import fizzbuzz, { fizzbuzzOutput } from "../utils/fizzbuzz";

export default defineComponent({
  name: "Refs",
  emits: ["playing"],
  props: {
    currentlyPlaying: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const counter = ref(0);
    const output = computed(() => {
      // Array [0 .. counter-1]
      const firstArray = [...Array(counter.value).keys()];
      // Array [1 .. counter]
      const raisedByOne = firstArray.map((x) => x + 1);
      const fizzbuzzOutput = raisedByOne.map(fizzbuzz);
      return fizzbuzzOutput;
    });
    //const output = fizzbuzzOutput(counter);

    const style = computed(() => {
      if (props.currentlyPlaying) {
        return { yellow: true };
      }
      return "";
    });

    watch(counter, () => {
      console.log("Composition Api", fizzbuzz(counter.value));
      context.emit("playing");
    });

    const next = () => {
      counter.value++;
    };

    const reset = () => {
      counter.value = 0;
    };

    onMounted(() => {
      console.log("Game Started - Composition Api");
    });

    return {
      output,
      style,
      next,
      reset,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 400px;
  height: 600px;
}

.button-group {
  display: flex;
  justify-content: space-around;
}

.yellow {
  background-color: yellow;
}

.console {
  text-align: center;
}
</style>
