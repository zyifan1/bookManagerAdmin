<template>

  <div class="container">
    <borrow-table class="borrowTable"></borrow-table>
  </div>

</template>

<script setup>

import BorrowTable from "../borrow/borrowTable.vue";

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  overflow: hidden;
}

.borrowTable {
  margin-top: 20px;
  width: 90%;
}

</style>