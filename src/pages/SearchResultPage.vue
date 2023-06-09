<template>
  <user-card-list :user-list="userList" />
    <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

import {Toast} from "@vant/compat";
import myAxios from "../plugins/myAxios.ts";
import qs from "qs"
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);//存放用户列表

onMounted ( async ()=>{     //异步调用
  const userListData = await myAxios.get('/user/search/tags',{
    params: {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize: function(params){
        // return qs.stringify(params,{arrayFormat:'repeat'})
        return qs.stringify(params,{indices: false})
      }
    }
  })
      .then(function (response){
        console.log('/user/search/tags succeed',response);
        Toast.success('请求成功!');
        return response?.data;  //返回数据  ?.可选链操作符，避免数据为null或undefined时报错
      })
      .catch(function (error){
        console.error('/user/search/tags error',error);
        Toast.fail('请求失败!');
      })
  // console.log(userListData)
  if(userListData){
    userListData.forEach(user => {
      if(user.tags){
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData;
  }
})

const mockList = {
  id: 123456,
  username: '华大爷',
  userAccount: 3311646194,
  avatarUrl: 'https://img1.baidu.com/it/u=1645832847,2375824523&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=480',
  profile: '我是一名后端小白，还有头发，可以继续卷一卷，阿巴阿巴阿巴阿巴阿巴阿巴。。。',
  gender: 0,
  phone: 10086,
  email: '10086@hua.com',
  userRole: 0,
  planetCode: '1234',
  tags: ['Java', 'Emo', 'C++', '算法', '夜跑', '羽毛球'],
  createTime: new Date(),
}

</script>

<style scoped>

</style>