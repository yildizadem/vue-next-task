<template>
  <div class="search">
    <input type="text" v-model="filter" />
    <button type="button" class="btn" @click="search">Search</button>
  </div>
</template>
<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.search input {
  width: 90%;
}
</style>
<script>
export default {
  name: "Search",
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    search: function () {
      this.$emit("filter-change", { keyword: this.filter });
    },
  },
};
</script>
