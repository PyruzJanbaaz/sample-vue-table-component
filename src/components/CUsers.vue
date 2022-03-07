<template>
  <CTable :header="header" :data="data"/>
</template>

<script>
import CTable from "@/components/table/CTable";
import axios from "axios";

export default {
  name: "CUsers",
  components: {CTable},
  data() {
    return {
      header: [
        {name: 'id', text: 'ID'},
        {name: 'firstName', text: 'First Name'},
        {name: 'lastName', text: 'Last Name'},
        {name: 'username', text: 'username'},
        {name: 'email', text: 'Email'},
        {name: 'createDate', text: 'Create Date'},
      ],
      data: []
    }
  },
  created() {
    this.getUserData().then(res => {
      this.data = res.content;
    })
  },
  methods: {
    async getUserData() {
      const _data = await axios.get('http://localhost:7777/api/v1/users/page?pageNumber=1&pageSize=2');
      return _data.data;
    }
  }
}
</script>

