<template>
  <div class="top">
    <router-link class="homeLink" to="/"> <img src="../public/game.png" /> Games4Gamers</router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/PCGames">PC Games</router-link>
      <router-link to="/BrowserGames">Browser Games</router-link>
      <router-link to="/News">News</router-link>
      <router-link to="/GiveAways">Give Aways</router-link>
    </nav>
  </div>
  <ScrollTop />
  <router-view/>
  <Footer />
</template>

<script>
import Footer from '@/components/MainFooter'
import ScrollTop from '@/components/ScrollToTop'

export default {
  components: {
    Footer,
    ScrollTop
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1400px;
  width: 100%;
}
body {
  color: #ffffff;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
}
.top .homeLink {
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.top .homeLink:hover {
  color: #ff0000;
}
.top .homeLink img {
  margin: 10px;
  background: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
nav {
  padding: 30px 0px;
}

nav a {
  font-weight: bold;
  color: #e4e4e4;
  text-decoration: none;
  margin: 5px 10px;
  transition: 0.4s all ease-in-out;
}

nav a.router-link-exact-active {
  color: #ff0000;
}


::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: rgba(235, 235, 235, 0); 
}
::-webkit-scrollbar-thumb {
  background: #6b0000; 
  cursor: pointer;
}
::-webkit-scrollbar-thumb:hover {
  background: #c90000; 
}
</style>
