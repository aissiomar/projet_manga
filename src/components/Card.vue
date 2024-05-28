<script setup>

const props = defineProps({
	img: String,
	label: String,
	public: String,
	complement: String
})

</script>

<template>
	<div>
		<h2>{{ label }}</h2>
		<em>{{ public }}</em>
		<img :src="img" :alt="img">
		<div class="complement" v-html="complement"></div>
	</div>
</template>