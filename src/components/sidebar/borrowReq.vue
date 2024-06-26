<script setup>

import BorrowReqTable from "../borrowReq/borrowReqTable.vue";
</script>

<template>

  <div class="container">
    <borrow-req-table class="borrowReqTable"></borrow-req-table>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  overflow: hidden;
}

.borrowReqTable {
  margin-top: 20px;
  width: 90%;
}

</style>