<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mangaOne } from "@/services/index.js";
import Card from "@/components/Card.vue";

const props = defineProps({
	id: String
});

const manga = ref({});
const mangaId = ref(props.id);

onMounted(async () => {
	console.log("Fetching manga detail for ID:", mangaId.value);
	manga.value = await mangaOne(mangaId.value);
	console.log("Manga detail fetched:", manga.value);
});
</script>

<template>
	<router-link :to="{ name: 'Manga' }" tag="button">Accueil</router-link>
	<div v-for="m in manga" :key="m.id" class="mangaOne">
		<Card :img="m.couvertures" :label="m.genre" :public="m.public" :complement="m.complement"/>
	</div>
</template>
