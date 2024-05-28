<script setup>
import { ref, onMounted } from "vue";
import { mangasAll } from "@/services/index.js";
import Card from "@/components/Card.vue";

const mangas = ref({});

onMounted(async () => {
	console.log("Fetching mangas...");
	mangas.value = await mangasAll();
	console.log("Mangas fetched:", mangas.value);
});
</script>

<template>
	<main>
        <div v-for="m in mangas" :key="m.id" class="mangasAll">
			<Card :img="m.couvertures" :label="m.genre"/>
			<p><router-link :to="{ name: 'MangasDetail', params: { id: m.id } }" tag="button">Voir plus</router-link></p>
        </div>
    </main>
</template>
