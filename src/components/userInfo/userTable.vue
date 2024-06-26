<script setup>
import myAxios from "../../plugins/myAxios.js";
import {ref} from "vue";

const columns = [
  {
    title: "用户ID",
    dataIndex: "userId",
    key: "userId"
  },
  {
    title: '昵称',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '用户名',
    dataIndex: 'userAccount',
    key: 'userAccount',
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    key: 'userRole',
  },
  {
    title: '用户创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '用户信息上次修改时间',
    key: 'updateTime',
    dataIndex: 'updateTime',
  },
  // {
  //   title: '试凑',
  //   key: 'action',
  // },
];

const data = ref()
const userId = window.localStorage.getItem("userId")

myAxios.get("/user/getAllUser",{
  params: {
    userId: userId
  }
}).then(res => {
  // for (let i = 0; i < res.data.data.length; i++) {
  //   const str = res.data.data[i].tags.replace(/^\[/, '').replace(/\]$/, '');
  //   res.data.data[i].tags = str.split(',');
  // }
  console.log(res.data.data)
  data.value = res.data.data;
})


const deleteBook = (bookName) => {
  myAxios.post("/book/deleteBook", {
    userId: userId,
    bookName: bookName
  }).then(res => {
    console.log(res.data);
    alert(res.data.data === 1 ? "成功" : "失败")
    if(res.data.data > 0 ){
      myAxios.get("/book/getNotBorrowBook").then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          const str = res.data.data[i].tags.replace(/^\[/, '').replace(/\]$/, '');
          res.data.data[i].tags = str.split(',');
        }
        data.value = res.data.data;
      })
    }
  })
}

</script>

<template>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          <smile-outlined/>
          Name
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a @click="deleteBook(record.bookName)">删除</a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<style scoped>

</style>