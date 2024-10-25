import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "My Template",
	description: "A Node.js & TypeScript template",
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	lastUpdated: true,
	cleanUrls: true,
	base: '/my-template/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Docs', link: '/introduction' },
			{ text: 'API', link: '/api/' },
		],
		search: {
			provider: 'local',
		},
		sidebar: [
			{
				text: 'Documentation',
				items: [
					{
						text: 'Introduction',
						link: '/introduction',
					},
					{
						text: 'Getting Started',
						link: '/getting-started',
					},
				],
			},
			{
				text: 'API Reference',
				items: [
					{
						text: 'Overview',
						link: '/api/',
					},
					...typedocSidebar,
				],
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		]
	}
})
