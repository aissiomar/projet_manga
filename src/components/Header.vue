<script setup>
const props = defineProps({
	logo: String,
	titre: String
});
console.log("Header props:", props);
</script>

<template>
	<header>
		<img :src="logo" :alt="logo">
		<h1><a href="@/views/Mangas.vue">{{ titre }}</a></h1>
	</header>
</template>
