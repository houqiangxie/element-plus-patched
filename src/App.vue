<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2025-03-08 06:56:58
 * @LastEditors: houqiangxie
 * @LastEditTime: 2025-03-08 10:01:17
-->
<script setup>
import { ref , onMounted } from 'vue';
const value = ref(null);
const dialogVisible = ref(false);
onMounted(() => {
  document.body.style.zoom = 1 / window.devicePixelRatio;
  console.log('dialogVisible: ', window.devicePixelRatio);
  setTimeout(() => {
  dialogVisible.value = true;

  }, 5000);
})
</script>

<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
    >
      <el-select v-model="value" placeholder="Select">
        <el-option label="Vue" value="vue">
          <img class="logo vue" src="./assets/logo-vue.png" alt="Vue.js">
        </el-option>
        <el-option label="React" value="react">
          <img class="logo" src="./assets/logo-react.png" alt="React.js">
        </el-option>
        <el-option label="Angular" value="angular">
          <img class="logo" src="./assets/logo-angular.png" alt="Angular.js">
        </el-option>
      </el-select>
    </el-dialog>
    
  </div>
</template>

<style >
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
