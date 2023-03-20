<template>
    <div class="giveAways">
        <div class="giveAwaysItems" v-for="item in gaways" :key="item.id">
            <img :src="item.main_image" :alt="item.title" />
            <div class="sInfo">
                <h3>{{ item.title }}</h3>
                <h3>{{ item.keys_left }}</h3>
                <p>{{ item.short_description }}</p>
                <a :href="item.giveaway_url">Read More</a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

export default {
    name: 'GiveAways',
    setup() {
        const gaways =ref([])
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        }

        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/giveaways', options)
            .then(response => response.json())
            .then(data => {
                gaways.value = data
                console.log(gaways.value)
            })
        })
        return {
            gaways
        }
    }
}

</script>