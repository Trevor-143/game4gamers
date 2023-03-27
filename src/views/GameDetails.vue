<template>
  <div class="about">

    <div class="gameIntro">
      <div class="topIntro">
        <img :src="fullGame.thumbnail" :alt="fullGame.title" />
        <div class="introInfo">
          <h3>{{ fullGame.title }}</h3>
          <p>{{ fullGame.short_description }}</p>
          <ul class="miniDesc">
            <li>{{ fullGame.genre }}</li>
            <li>{{ fullGame.developer }}</li>
            <li>{{ fullGame.status }}</li>
            <li>{{ fullGame.publisher }}</li>
            <li>{{ fullGame.platform }}</li>
          </ul>
        </div>

      </div>
      
    </div>

    <div class="description">
      <h3>Full description</h3>
      <div v-html="fullGame.description"></div>
    </div>

    <div class="gamePlay">
      <h3>Screenshots</h3>
      <div class=imgViews>
        <div v-for="shot in screenshots" :key="shot.id" class="views">
          <img :src="shot.image" />
        </div>
      </div>
    </div>

    <div class="requirements">
      <h3>System Requirements</h3>
      <ul class="needs">
        <li> <fa icon="desktop" class=sIcons /> {{ minimum_system_requirements.os }}</li>
        <li> <fa icon="genderless" class=sIcons /> {{ minimum_system_requirements.graphics }}</li>
        <li> <fa icon="memory" class=sIcons /> {{ minimum_system_requirements.memory }}</li>
        <li> <fa icon="microchip" class=sIcons /> {{ minimum_system_requirements.processor }}</li>
        <li> <fa icon="database" class=sIcons /> {{ minimum_system_requirements.storage }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from "vue-router";

export default {
  name: 'GameDetails',

  setup() {
    const fullGame = ref([])
    const route = useRoute()
    const minimum_system_requirements = ref([])
    const screenshots = ref([])

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };

    onBeforeMount(() => {
      fetch(`https://mmo-games.p.rapidapi.com/game?id=${route.params.id}`, options)
      .then(reply => reply.json())
      .then(data => {
        fullGame.value = data
        minimum_system_requirements.value = data.minimum_system_requirements
        screenshots.value = data.screenshots
        // console.log(fullGame.value)
      })
    })
    return {
      fullGame,
      route,
      screenshots,
      minimum_system_requirements
    }
  }
}
</script>

<style scoped>

.about {
  margin: 10px 20px;
}

.gameIntro {
  display: flex;
  align-items: center;
}
.gameIntro img {
  border-radius: 10px;
  margin: 10px;
}
.introInfo {
  margin: auto 10px;
  text-align: left;
}
.introInfo h3 {
  margin-bottom: 10px;
}
.topIntro {
  display: flex;
  align-items: center;
}
.miniDesc {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.miniDesc li {
  list-style: none;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
}
.description {
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: #1d1d1d;
  padding: 1rem;
  border-radius: 10px;
}
.description h3 {
  text-align: left;
}
.gamePlay h3 {
  text-align: left;
  padding-left: 1rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
}
.imgViews {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.views {
  /* outline: 1px solid red; */
  width: fit-content;
  border-radius: 10px;
}
.views img {
  width: 100%;
  border-radius: 10px;
}
.requirements {
  text-align: left;
}
.requirements h3 {
  padding-left: 1rem;
  margin-bottom: .5rem;
}
.needs {
  display: grid;
  gap: 1.3rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.needs li {
  list-style: none;
  display: flex;
  align-items: center;
}
.sIcons {
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: #fff;
  padding: 15px;
  border-radius: 50%;
  color: #000;
  margin: 10px;
}
</style>