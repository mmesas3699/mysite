import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/home/About'
import Home from '@/views/home/Home'

import News from '@/views/news/News'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/news',
			name: 'news',
			component: News,
		}
	]
})