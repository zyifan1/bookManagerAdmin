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
<!--      <template v-else-if="column.key === 'action'">-->
<!--        <span>-->
<!--          <a @click="returnBook(record.bookName)">还书</a>-->
<!--        </span>-->
<!--      </template>-->
    </template>
  </a-table>
</template>
<script setup>
import {ref} from "vue";
import myAxios from "../../plugins/myAxios.js";


const columns = [
  {
    title: '书名',
    dataIndex: 'bookName',
    key: 'bookName',
  },
  {
    title: '简介',
    dataIndex: 'bookInfo',
    key: 'bookInfo',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '借阅状态',
    dataIndex: 'borrowState',
    key: 'borrowState',
  },
  {
    title: '借阅时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  // {
  //   title: '操作',
  //   key: 'action',
  // }
];

const data = ref()
const userId = window.localStorage.getItem('userId')

myAxios.get("/book/getAllBorrowBook", {
  params: {
    userId: userId
  }
}).then(res => {
  for (let i = 0; i < res.data.data.length; i++) {
    const str = res.data.data[i].tags.replace(/^\[/, '').replace(/\]$/, '');
    res.data.data[i].tags = str.split(',');
  }
  data.value = res.data.data;
})

const returnBook = (bookName) => {
  const userId = window.localStorage.getItem("userId")
  myAxios.post("/user/returnBook", {
    userId: userId,
    bookName: bookName
  }).then(res => {
    console.log(res.data);
    alert(res.data.data === 1 ? "还书成功" : "失败")
    if(res.data.data > 0 ){
      myAxios.get("/book/getBorrowBookByUser", {
        params: {
          userId: userId
        }
      }).then(res => {
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