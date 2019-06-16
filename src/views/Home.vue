<template>
  <v-container grid-list-md text-xs-center class="center">
    <v-layout row wrap>
      <v-flex xs12 class="b-grey">
        <h1 class="display-1 font-weight-bold">{{fisrt_name+ " " + last_name}}</h1>
        <h4>&lt; Front-End Web Developer &sol;&gt;</h4>
      </v-flex>
      <v-flex xs12 class="b-grey cent">
        <v-img
          class="elevation-10"
          max-width="330px"
          max-height="220px"
          contain
          :src="require('../../public/foto-curriculum.jpg')"
        ></v-img>
      </v-flex>
      <v-flex v-for="(skill,i) in skills" :key="skill" xs3 class="b-grey cent">
        <v-card class="ccent" :class="{ news: newSkill[i]}" width="90px">
          {{skill}}
          <v-img
            class="box bounce-5"
            max-width="90px"
            alt="skill"
            contain
            max-height="40px"
            width="90px"
            :src="require('../../public/'+skillsI[i])"
          ></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fisrt_name: "Oscar",
      last_name: "Urgelles Marsal",
      email: "oscar.urgelles",
      skills: ["JavaScript", "Html", "Css", "Vue","Bootstrap", "React","Vuetify"],
      skillsI: ["javascript.png", "html.png", "css.png", "vue.png","bootstrap.png","react.png", "vuetify.png"],
      newSkill: [false, false, false, false, false, true, false]
    };
  },
  methods: {}
};
</script>

<style scoped>
.center {
  margin: auto;
  padding: 0px;
}

.ccent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.news{
 background-image: url("../../public/new.png");
 background-position: left;
 background-position-y: -2px;
 background-size: 40px;
}

.b-grey {
  background-color: rgba(199, 195, 195, 0.336);
}
.box:hover {
  animation-duration: 2s;
  animation-iteration-count: 2;
}
.bounce-5:hover {
  animation-name: bounce-5;
  animation-timing-function: ease;
}
@keyframes bounce-5 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-10px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
