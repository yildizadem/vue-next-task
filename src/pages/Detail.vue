<template>
  <div class="container">
    <Loader v-bind:loading="loading" />
    <div v-if="event">
      <header>
        <h2 class="title">{{event.name}}</h2>
        <div>{{ date() }}</div>
        <router-link to="/" tag="a">Back</router-link>
      </header>
      <img v-bind:src="image()" class="header-image" />
      <div class="info">
        <div class="price">
          <h3>Price Ranges</h3>
          <div v-for="price in event.priceRanges" :key="price.type">
            <div>
              <strong>{{price.type}} tickets</strong>
            </div>
            <div>{{price.min}}-{{price.min}} ({{price.currency}})</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header-image {
  margin-top: 1rem;
  width: 100%;
}
.price {
  margin-top: 1rem;
}
</style>
<script>
import Loader from "../components/Loader.vue";
import env from "../env";
export default {
  name: "Detail",
  components: { Loader },
  data() {
    return {
      event: null,
      loading: false,
    };
  },
  mounted: async function () {
    try {
      this.loading = true;
      let eventId = this.$router.currentRoute.value.params.id;
      let request = await fetch(
        `${env.API_ROOT}/discovery/v2/events/${eventId}.json?apikey=${env.API_KEY}`
      );
      this.event = await request.json();
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.loading = false;
    }
  },
  methods: {
    detail: function () {
      let url =
        "https://app.ticketmaster.com/discovery/v2/events/vvG1VZpdefi1Fx.json?apikey=CAKfaaNRJJw1zOw6fRIbtNQDPANrxyoL";
    },
    image: function () {
      let img = this.event.images.find((image) => image.ratio === "16_9");
      return img ? img.url : this.event.images[0].url;
    },
    date: function () {
      let date = this.event.dates.start;
      return `${date.localDate} - ${date.localTime}`;
    },
  },
};
</script>