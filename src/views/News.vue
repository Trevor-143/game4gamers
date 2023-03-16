<template>
    <h1>News</h1>
    <div class="news">
        <ul class="newUl">
            <li v-for="item in news" :key="item.id">
                <img class="back" :src="item.main_image" :alt="item.id" />
                <div class="itemContent">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.short_description }}</p>
                    <!-- <routerLink :to="item.article_url">Read More</routerLink> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
    name: 'News',

    setup() {
        const news = ref([])

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };
        
        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
            .then(response => response.json())
            .then(data => {
                news.value = data
                console.log(news.value)
            })
        })
        return {
            news
        }
    }
}


</script>

<style>
.news {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.newUl {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.newUl li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    border: 1px solid red;
    width: 300px;
    margin: 10px;
}
.newUl li:nth-child(2) {
    width: 500px;
}
.newUl img {
    width: 100%;
    object-fit: cover;
}
</style>