<template>
  <div v-if="isLoading" class="wait">
    <Loading />
  </div>
  <MainGame />
  <HelloWorld />
  <Anime />
  <Card />
  <Social />
  <Action />
  <Battle_Royale />
  <Fantasy />
  <Fighting />
  <Fiction />
  <Sports />
  <Racing />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainGame from '@/components/MainGame.vue'
import Action from '@/components/forHome/Action.vue'
import Card from '@/components/forHome/Card.vue'
import Battle_Royale from '@/components/forHome/Battle_Royal.vue'
import Social from '@/components/forHome/Social.vue'
import Fantasy from '@/components/forHome/Fantasy.vue'
import Fighting from '@/components/forHome/Fighting.vue'
import Fiction from '@/components/forHome/Sci_fi.vue'
import Sports from '@/components/forHome/Sports.vue'
import Racing from '@/components/forHome/Racing.vue'
import Anime from '@/components/forHome/Anime.vue'
import Loading from '@/components/loading.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainGame,
    Action,
    Card,
    Battle_Royale,
    Social,
    Fantasy,
    Fighting,
    Fiction,
    Sports,
    Racing,
    Anime,
    Loading
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    onMounted() {
      setTimeout(() => {
        this.isLoading = false
      }, 3000);
    },
  },
}
</script>

<style>
.wait {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
</style>