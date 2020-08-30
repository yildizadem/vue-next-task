<template>
  <div class="paging" v-if="page.totalElements > 0">
    <div class="control">
      <span v-if="links.first" @click="go('first')">First</span>
      <span v-if="links.prev" @click="go('prev')">Prev</span>
      <span v-if="links.next" @click="go('next')">Next</span>
      <span v-if="links.last" @click="go('last')">Last</span>
    </div>
    <div class="info">{{info()}}</div>
  </div>
</template>
<style scoped>
.paging {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 2rem;
}
.control {
  display: flex;
  border: 1px solid #000000;
  border-radius: 0.25rem;
  width: fit-content;
}
.control span,
.info {
  padding: 0.25rem;
}
.control span:hover {
  cursor: pointer;
}
</style>
<script>
export default {
  name: "Paging",
  props: {
    page: Object,
    links: Object,
  },
  methods: {
    info: function () {
      let { size, totalElements, totalPages, number } = this.page;
      let start = size * number + 1;
      let end = size * (number + 1);
      return `${start}-${
        end > totalElements ? totalElements : end
      } of ${totalElements}`;
    },
    go: function (way) {
      this.$emit("change", { url: this.links[way].href });
    },
  },
};
</script>