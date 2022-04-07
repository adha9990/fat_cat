<template>
  <div class="bg">
    <div class="middle_center">
      <div></div>
      <div>
        <Loading></Loading>
        <div class="caption">正在處理更新<br />{{ time }}% 完成<br />請勿關閉電腦</div>
      </div>
      <div></div>
    </div>
    <Future></Future>
  </div>
</template>

<script setup>
import { computed, provide, onMounted } from "vue";

import Loading from "./components/Loading.vue";
import Future from "./components/Future.vue";

import Timer from "./composables/timer";

const timer = new Timer();
const time = computed(() => timer.time);

provide("timer", timer);

onMounted(() => {
  timer.start();
});
</script>

<style scoped>
* {
  /* cursor: none; */
  user-select: none;
  font-family: "微軟正黑體";
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 120, 215);
}
.middle_center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
.caption {
  color: white;
  font-size: 24px;
}
</style>
