<template>
  <table v-if="events.length > 0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="event in events" :key="event.id" @click="go(event)">
        <td>{{ event.name }}</td>
        <td>{{ event.info }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #000000;
  border-radius: 0.25rem;
}
th,
td {
  padding: 0.25rem;
}
td {
  border-top: 1px solid black;
}
tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
<script>
export default {
  props: {
    events: Array,
  },
  methods: {
    go: function (event) {
      this.$router.push("/detail/" + event.id);
    },
  },
};
</script>