<template>
  <div class="help" v-show="help">
    <p>按鍵使用方法</p>
    <table>
      <tr>
        <td>H</td>
        <td>：</td>
        <td>開/關說明</td>
      </tr>
      <tr>
        <td>F</td>
        <td>：</td>
        <td>開/關全螢幕</td>
      </tr>
      <tr>
        <td>R</td>
        <td>：</td>
        <td>重新計數</td>
      </tr>
      <tr>
        <td>SPACE</td>
        <td>：</td>
        <td>暫停/繼續計數</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import cookie from "../composables/cookie";

const { setCookie, getCookie } = cookie();

const help = ref(getCookie("help") ?? true);
const fullscreen = ref(getCookie("fullscreen") ?? true);

const timer = inject("timer");

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyH":
      help.value = !help.value;
      switchHelp();
      break;
    case "KeyF":
      fullscreen.value = !fullscreen.value;
      switchFullscreen();
      break;
    case "KeyR":
      timer.reset();
      break;
    case "Space":
      if (timer.isStop.value) {
        timer.start();
      } else {
        timer.stop();
      }
      break;
  }
});

const switchHelp = () => {
  setCookie("help", help.value, 30);
};

const switchFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

onMounted(() => {
  if (help.value) switchHelp();
  if (fullscreen.value) switchFullscreen();
});
</script>

<style scoped>
.help {
  position: absolute;
  top: 75%;
  right: 10%;
  color: lightblue;
}
</style>
