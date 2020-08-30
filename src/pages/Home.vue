<template>
  <div class="container">
    <h2 class="title">Search events at Ticketmaster</h2>
    <Search @filter-change="search" />
    <Table v-bind:events="events" />
    <Paging v-bind:page="page" v-bind:links="links" @change="search" />
    <Loader v-bind:loading="loading" />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Table from "../components/Table.vue";
import Paging from "../components/Paging.vue";
import Loader from "../components/Loader.vue";
/* 
  .env dosyası içersinde VUE_APP_...
  şeklinde tanımladığım değişkenler 
  process.env içerisinde gelmediler
*/
import env from "../env";

export default {
  name: "Home",
  components: {
    Search,
    Table,
    Paging,
    Loader,
  },
  data() {
    return {
      apiUrl: env.API_ROOT,
      apiKey: env.API_KEY,
      size: 20,
      events: [],
      page: {},
      links: {},
      loading: false,
    };
  },
  methods: {
    search: async function ({ keyword, url }) {
      try {
        this.loading = true;
        let request = await fetch(
          url
            ? `${this.apiUrl}${url}&apikey=${this.apiKey}`
            : `${this.apiUrl}/discovery/v2/events.json?size=${this.size}&apikey=${this.apiKey}&keyword=${keyword}`
        );
        let response = await request.json();
        this.loading = false;
        this.events = response._embedded ? response._embedded.events : [];
        this.page = response.page;
        this.links = response._links;
      } catch (err) {
        console.log(err);
        this.loading = false;
        this.events = [];
        this.page = { totalElements: 0 };
        this.links = {};
      }
    },
  },
};
</script>