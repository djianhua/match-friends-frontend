<template>
  <div id="teamPage">
    <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter();

// 跳转到加入队伍页
const doJoinTeam =() => {
  router.push({
    path: "/team/add"
  })
}

</script>

<style scoped>

</style>