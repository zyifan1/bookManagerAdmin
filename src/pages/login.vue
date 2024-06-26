<script setup>
import {Icon as TIcon} from "tdesign-icons-vue-next"
import {computed, inject, reactive, ref} from "vue";
import myAxios from "../plugins/myAxios.js";
import {useRouter} from "vue-router";

// 用户
// const getUserStore = () => localStorage.getItem("userId");
// const setUserStore = (user) => localStorage.setItem("userId", JSON.stringify(user));

// 主题
const theme = inject("theme");
const bg = computed(() => theme.value === "dark"
    ? "url(https://static.tdesign.tencent.com/starter/vue-next/assets/assets-login-bg-black-ff89ae69.png)"
    : "url(https://static.tdesign.tencent.com/starter/vue-next/assets/assets-login-bg-white-439b0654.png)");

// 登录
const loginButtonLoading = ref(false);
const loginForm = reactive({
  userAccount: '',
  password: '',
})

const router = useRouter()

/*
 * 以上引入的组件和变量
 * 以下定义用到的相关函数
 */

const handleLogin = async () => {
  const res = await myAxios.post("/user/adminLogin", {
     ...loginForm
  })
  console.log(res)
  if(res.status === 200){
    window.localStorage.setItem("userId", res.data.data);
    await router.push({
      path: '/index'
    })

  }
}
</script>

<template>
  <div class="oe-login-wrapper">
    <div class="oe-login-container">
      <div class="oe-title-container">
        <h1 class="oe-title">登录到</h1>
        <h1 class="oe-title">图书管理系统</h1>
        <h1 class="oe-title">管理员端</h1>
      </div>
      <TForm :data="loginForm" class="oe-login-form" label-width="0" @submit="handleLogin">
        <TFormItem style="padding: 10px 0;">
          <TInput v-model="loginForm.userAccount" placeholder="请输入账号" size="large" style="margin-left: 0;">
            <template #prefixIcon>
              <TIcon name="user"/>
            </template>
          </TInput>
        </TFormItem>
        <TFormItem style="padding: 10px 0;">
          <TInput v-model="loginForm.password" placeholder="请输入密码" size="large" style="margin-left: 0;"
                  type="password">
            <template #prefixIcon>
              <TIcon name="lock-on"/>
            </template>
          </TInput>
        </TFormItem>
        <TFormItem>
          <TButton type="submit" :block="true" :loading="loginButtonLoading" size="large">
            登录
          </TButton>
        </TFormItem>
      </TForm>
    </div>
    <TFooter class="oe-login-copyright" style="padding: 0">
      Copyright @ {{ new Date().getFullYear() }} State Gird All Rights Reserved.
    </TFooter>
  </div>
</template>

<style scoped>
.oe-login-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: 100% center;
  background-image: v-bind(bg);
}

.oe-login-container {
  position: relative;
  min-height: 500px;
  width: 100%;
  padding: 20px;
  margin-top: 100px;
  margin-left: 50px;
}

.oe-title-container {
  font: var(--oe-font-headline-large);
  color: var(--td-text-color-primary);
  margin-top: var(--td-comp-margin-xs);
}

.oe-title {
  font: var(--oe-font-headline-large);
  color: var(--td-text-color-primary);
  margin: 0;
}

.oe-login-form {
  width: 400px;
  margin-top: var(--td-comp-margin-xxxxl);
}

.oe-login-copyright {
  padding: 16px 5% !important;
  font: var(--td-font-body-medium);
  color: var(--td-text-color-secondary);
}
</style>