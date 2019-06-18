<template>
  <v-container grid-list-md text-xs-center class="center">
    <v-layout row wrap>
       <v-flex xs12 class="b-grey cent">
         <h1>My Projects</h1>
       </v-flex>
       <v-flex xs12 class="b-grey cent">
         <a href="https://landaway.netlify.com/">
         <v-img
          class="elevation-10 bround mr-2"
          height="60px"
          width="150px"
          max-width="150px"
          max-height="70px"
          :src="require('../../public/logo_landaway_rectangular.jpg')"
        ></v-img>
        </a>
       </v-flex>
      <v-flex xs12 class="b-grey cent">
        <router-link to="/home">
          <v-btn>Go Back</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
