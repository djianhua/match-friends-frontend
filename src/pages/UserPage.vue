<template>
  <template v-if="user != null">
    <van-cell title="昵称" is-link to='/user/edit' :value="user.username" @click="toEdit('username', '昵称', user.username)"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="头像" is-link to='/user/edit'>
      <img style="height: 48px" :src="user.avatarUrl"/>
    </van-cell>
    <van-cell title="性别" is-link to='/user/edit' :value="user.gender" @click="toEdit('gender', '性别', user.gender == '1' ? '男' : '女')"/>
    <van-cell title="电话" is-link to='/user/edit' :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link to='/user/edit' :value="user.email" @click="toEdit('email', '邮箱地址', user.email)"/>
    <van-cell title="星球编号" :value="user.planetCode"/>
    <van-cell title="注册时间" :value="user.createTime"/>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user";
import {Toast} from "vant";

// const user = {
//   id: 1,
//   username: '鱼皮',
//   userAccount: 'dogYupi',
//   avatarUrl: 'https://img1.baidu.com/it/u=1645832847,2375824523&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=480',
//   gender: '男',
//   phone: '121311313',
//   email: '23432@qq.com',
//   planetCode: '123',
//   createTime: new Date(),
// };

const user = ref();

onMounted(async () => {
  user.value = await getCurrentUser();
  if (user.value == null) {
    Toast.fail("未登录")
    router.replace({
      path: "/user/login"
    })
  }
})

const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>