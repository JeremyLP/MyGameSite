<template>
  <div class="flexGameplay">
    <h1 class="h1Gameplay">Gameplay and others stuffs</h1>

    <section class="sessionBorder">
      <h2>This is just another platformer ?</h2>
      <p>In fact, yes it is.</p>
      <p>I don't plan to do something very impressive or original for my first attempt. So please, don't put your expectation too high.</p>
    </section>

    <section class="sessionBorder">
      <h2>What an original techno do you use ?</h2>
      <p>For the moment i will work with Phaser, because i think that i like it.</p>
      <p>Yeah i know, my reasons are really straighforward but i need to start from somewhere, so here i begin !</p>
    </section>

    <section class="sessionBorder">
      <h2>Do you want to sold it after having finish your project ?</h2>
      <p>No, i don't think...</p>
    </section>

    <section class="sessionBorder" :key="maj.id" v-for="maj in maj">
      <h2>{{ maj.maj_title }}</h2>
      <p>{{ maj.maj_content }}</p>
      <img :src="maj.maj_img" alt="">
    </section>
  </div>
</template>

<script>
// const SERVER_ADDRESS = process.env.VUEJS_APP_SERVER_ADDRESS;


export default {
  name: "Gameplay",
  data () {
    return {
      maj: [

      ]
    };
  },

  methods: {
    fetchData() {
      fetch('http://localhost:8000/api/maj/', {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        mode: 'cors'
      })
        .then(res => res.json())
        .then(data => {
          this.maj = data
          console.log(data)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  mounted() {
    console.log("Mounted ?", this.maj);
    this.fetchData();
    
  }
};
</script>

<style scoped>

.flexGameplay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.h1Gameplay {
  color: rgba(29, 29, 199, 0.61);
  text-align: center;
}

.sessionBorder {
  border: 1.5mm ridge black;
  width: 80%;
  margin-top: 15px;
  text-align: center;
  box-shadow: 5px 5px 5px black;
  background-color: rgba(204, 204, 204, 0.555);
}

</style>