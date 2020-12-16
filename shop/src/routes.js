import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';
import NotFound from './pages/404';
import Shop from './pages/Shop';

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound,
		},
		{
			path: '/shop',
			name: 'shop',
			component: Shop,
		},
	]
})
