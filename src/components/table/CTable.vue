<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="th in tableHeader" :key="th"> {{ th.text }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="td in tableData" :key="td">
      <td v-for="th in tableHeader" :key="th">
        <span v-if="td[th.name] === null">
          -
        </span>
        <span v-else-if="th.name === 'createDate'">
          {{ td[th.name].replace('T', ' ').split('.')[0] }}
        </span>
        <span v-else>
          {{ td[th.name] }}
        </span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CTable",
  props: {
    header: Array,
    data: Array
  },
  computed: {
    tableHeader() {
      return this.header || []
    },
    tableData() {
      return this.data || []
    }
  }
}
</script>

<style scoped>

</style>