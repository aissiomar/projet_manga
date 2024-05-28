<script setup>
const props = defineProps({
	update: String,
	sources: {}
});
console.log("Footer props:", props);
</script>

<template>
	<footer>
		<p>Dernière update le : {{ update }}</p>
			<ul>
				Sources :
				<li v-for="source in sources" :key="source"><a :href="source" target="_blank">{{ source }}</a></li>
			</ul>
	</footer>
</template>
