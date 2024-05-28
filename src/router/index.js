import { createRouter, createWebHistory } from 'vue-router';
import Mangas from '../views/Mangas.vue';
import MangasDetail from '../views/MangasDetail.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
		path: '/',
		name: 'manga',
		component: Mangas
		},
		{
		path: '/manga/:id',
		name: 'MangasDetail',
		component: MangasDetail,
		props: true
		}
	]
});

export default router;
