<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" default-value="item2" :collapsed="collapsed" @change="changeHandler">
        <template #logo>
          <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo"/>
        </template>
        <t-menu-group title="信息">
          <t-menu-item value="2-2" @click="pageTo('bookInfo')">
            <template #icon>
              <t-icon name="edit-1"/>
            </template>
            图书信息
          </t-menu-item>
          <t-menu-item value="2-3" @click="pageTo('borrow')">
            <template #icon>
              <t-icon name="root-list"/>
            </template>
            借阅详情
          </t-menu-item>
          <t-menu-item value="2-4" @click="pageTo('borrowReq')">
            <template #icon>
              <t-icon name="root-list"/>
            </template>
            借阅申请
          </t-menu-item>
          <t-menu-item value="2-5" @click="pageTo('userInfo')">
            <template #icon>
              <t-icon name="root-list"/>
            </template>
            用户信息
          </t-menu-item>
        </t-menu-group>
<!--        <t-menu-group title="更多">-->
<!--          <t-menu-item value="item3" @click="pageTo('ownInfo')">-->
<!--            <template #icon>-->
<!--              <t-icon name="user"/>-->
<!--            </template>-->
<!--            个人主页-->
<!--          </t-menu-item>-->
<!--          <t-menu-item value="item4" @click="logout()">-->
<!--            <template #icon>-->
<!--              <t-icon name="login"/>-->
<!--            </template>-->
<!--            登录页-->
<!--          </t-menu-item>-->
<!--        </t-menu-group>-->
      </t-menu>
    </t-aside>
    <t-layout>
      <t-content class="content">
        <div class="header"></div>
        <router-view></router-view>
      </t-content>
            <t-footer>湖北工程学院计算机学院</t-footer>
    </t-layout>
  </t-layout>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()

const pageTo = (path) => {
  router.push({
    path: `/index/${path}`,
  })
}

const logout = () => {
  router.push({
    path: `/`,
  })
  window.localStorage.clear()
}


import {ref} from 'vue';

const collapsed = ref(false);
const iconUrl = ref('https://picsum.photos/136/33');

const changeHandler = (active) => {
  console.log('change', active);
};

</script>

<style scoped>
.header {
  height: 56px;
  background: white;
}

.content {
  min-height: 80vh;
}
</style>