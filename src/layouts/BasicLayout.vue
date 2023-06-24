<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"

  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view />
  </div>
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/Team" icon="search" name="team">队伍页</van-tabbar-item>
    <van-tabbar-item to="/User" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import {Toast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter()

const onClickLeft = () => {
  router.back();
};
const onClickRight = () => {
  router.push('/search')
};
const onChange = (index) => Toast(`标签 ${index}`);

</script>

<style scoped>

</style>