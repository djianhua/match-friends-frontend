<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

import {Toast} from "@vant/compat";
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);//存放用户列表

onMounted ( async () => {     //异步调用
  const userListData = await myAxios.get('/user/recommend', {
    params: {
      pageNum: 1,
      pageSize: 8,
    },
  })
      .then(function (response) {
        console.log('/user/recommend succeed', response);
        Toast.success('请求成功!');
        return response?.data?.records;  //返回数据  ?.可选链操作符，避免数据为null或undefined时报错
      })
      .catch(function (error) {
        console.error('/user/recommend error', error);
        Toast.fail('请求失败!');
      })
  if(userListData){
    userListData.forEach(user=> {
      if(user.tags){
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData;
  }
})

</script>

<style scoped>

</style>
