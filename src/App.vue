<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <OldVsNew />
  <div class="vertical-space"></div>
  <div style="display: flex">
    <FizzBuzzOld />
    <FizzBuzz />
  </div>
</template>

<script>
/**
 * @playing="playingNowOld" :currentlyPlaying="playingOld"
 * @playing="playingNowNew" :currentlyPlaying="playingNew"
 */
import FizzBuzz from "./components/FizzBuzz.vue";
import FizzBuzzOld from "./components/FizzBuzzOld.vue";
import OldVsNew from "./components/OldVsNew.vue";
export default {
  name: "App",
  components: {
    FizzBuzz,
    FizzBuzzOld,
    OldVsNew,
  },
  data() {
    return {
      playingOld: false,
      playingNew: false,
    };
  },
  methods: {
    playingNowOld() {
      this.playingOld = true;
      this.playingNew = false;
    },
    playingNowNew() {
      this.playingOld = false;
      this.playingNew = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.vertical-space {
  height: 200px;
}
</style>
