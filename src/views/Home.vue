<template>
  <v-container grid-list-md text-xs-center class="center">
    <v-layout row wrap>
      <v-flex xs12 class="b-grey">
        <h1 class="display-1 font-weight-bold">{{fisrt_name+ " " + last_name}}</h1>
        <h4>&lt; Front-End Web Developer &sol;&gt;</h4>
      </v-flex>
      <v-flex xs12 class="b-grey cent">
        <v-carousel class="mw300" height="200px" hide-delimiters>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" contain></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex v-for="(skill,i) in skills" :key="skill" xs3 class="b-grey cent">
        <v-card to="/proyectos" class="ccent pb-1" :class="{ news: newSkill[i]}" width="90px">
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
      <v-flex xs12 class="b-grey cent">
        <strong class="mr-1">Contact me:</strong>
      </v-flex>
      <v-flex xs12 class="b-grey cent">
        <v-icon small class="mr-2">mail</v-icon>
        <a
          href="mailto:oscar.urgelles@gmail.com?Subject=ContactOscar"
          target="_top"
        >{{email}}&#64;gmail.com</a>
      </v-flex>
      <v-flex xs12 class="b-grey cent">
        <v-img
          class="elevation-10 bround mr-2"
          max-width="18px"
          max-height="18px"
          :src="require('../../public/linkedin.png')"
        ></v-img>
        <a href="https://www.linkedin.com/in/oscarurgelles/">/oscarurgelles</a>
      </v-flex>
      <v-flex xs12 class="b-grey cent">
        <v-img
          class="elevation-10 bround mr-2"
          max-width="18px"
          max-height="18px"
          :src="require('../../public/github.png')"
        ></v-img>
        <a href="https://github.com/snowoner">/snowoner</a>
      </v-flex>
      <v-flex xs12 class="b-grey cent">
        <v-img
          class="elevation-10"
          max-width="310px"
          max-height="300px"
          contain
          :src="require('../../public/OSCAR.png')"
        ></v-img>
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
      skills: [
        "JavaScript",
        "Html",
        "Css",
        "Vue",
        "Bootstrap",
        "React",
        "Vuetify",
        "Firebase",
        "Git",
        "Json",
        "VeeValidate",
        "Redux"
      ],
      skillsI: [
        "javascript.png",
        "html.png",
        "css.png",
        "vue.png",
        "bootstrap.png",
        "react.png",
        "vuetify.png",
        "firebase.png",
        "git.png",
        "json.png",
        "VeValidate.png",
        "redux.png"
      ],
      newSkill: [
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true
      ],
      items: [
        {
          src: "./foto-curriculum.jpg"
        },
        {
          src: "./foto-no-curriculum2.jpg"
        },
        {
          src: "./foto-curriculum2.jpg"
        },
        {
          src: "./foto-no-curriculum.jpg"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
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
.mw300{
  max-width: 300px;
}

.news {
  background-image: url("../../public/new.png");
  background-position: left;
  background-position-y: -2px;
  background-size: 40px;
}

.b-grey {
  background-color: rgba(199, 195, 195, 0.336);
}

.bround {
  border-radius: 6px;
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
