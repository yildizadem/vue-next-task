<template>
  <div class="loader" v-if="loading">
    <span>Loading...</span>
  </div>
</template>
<style scoped>
.loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
}
</style>
<script>
export default {
  name: "Loader",
  props: {
    loading: Boolean,
  },
};
</script>
