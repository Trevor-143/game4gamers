<template>
    <section class="allTheGames">
        <h2>All Pc Games</h2>
        <ul class="gameList">
            <li v-for="game in pcGameList" :key="game.id" class="gameListLi">
                <img :src="game.thumbnail" :alt="game.title" />
                <div class="gameListInfo">
                    <h3 class="gameTitle">{{ game.title }}</h3>
                    <h3>{{ game.developer }}</h3>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
    name: 'ForPc',
    setup() {
        const pcGameList = ref([])
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };

        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/games?platform=pc', options)
            .then(response => response.json())
            .then(data => {
                pcGameList.value = data
            })
        })
        return {
            pcGameList
        }
    }    
}
</script>

<style>
    .allTheGames h2 {
        padding: 5px 15px;
    }
    .gameList {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        
    }
    .gameListLi {
        min-width: 200px;
        max-width: 250px;
        width: 100%;
        margin: 5px;
        border-radius: 10px;
        list-style: none;
        position: relative;
    }
    .gameListLi img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
    .gameListInfo {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
        font-size: 13px;
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }
    .gameListLi:hover .gameListInfo {
        opacity: 1;
    }
</style>