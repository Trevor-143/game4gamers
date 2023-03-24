<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $route.params.id }}</p>
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
        console.log(fullGame.value)
      })
    })
    return {
      fullGame,
      route

    }
  }
}
</script>