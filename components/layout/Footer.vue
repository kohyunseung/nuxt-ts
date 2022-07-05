<template>
	<v-footer absolute app>
		<span>Dongwha Nuxt + Typescript + pinia {{ test }}</span>
	</v-footer>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import Vue from 'vue'

export default Vue.extend({
	name: 'LayoutFooter',
	props: {},

	data: () => {
		return {
			test: '12345',
		}
	},
})
</script>
