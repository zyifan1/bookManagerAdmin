<template>

  <div class="container">
    <user-table class="userTable"></user-table>
  </div>

</template>

<script setup>

import UserTable from "../userInfo/userTable.vue";

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  overflow: hidden;
}

.userTable {
  margin-top: 20px;
  width: 90%;
}

</style>