<template>
	<div id="app" v-if="showing">
		<letter-Cube></letter-cube>
	</div>
</template>

<script>
	import {LetterCube} from 'vue-loading-spinner/'
	export default {
		name:"Loading",
		components: {
			LetterCube
		},
		data(){
			return {
				showing:false
			}
		},
		mounted(){
			this.$eventBus.$on('loading',this.showing)
		}
	}
</script>
<style lang="scss" scoped>
	.app{
		background-color:white;
	}
</style>
