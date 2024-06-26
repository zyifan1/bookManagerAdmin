<template>

  <div class="container">
    <book-table class="bookTable"></book-table>
  </div>


</template>

<script setup>
import BookTable from "../bookInfo/bookTable.vue";
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  overflow: hidden;
}
.bookTable {
  margin-top: 20px;
  width: 90%;
}
</style>