<template>
	<div id="app" v-show="showing">
		  <transition name="fade">
		<first @close="closeLoding"/>
	</transition>
	</div>
</template>

<script>
	import first from './firstLoading'
	export default {
		name:"Loading",
		components: {
			first
		},
		data(){
			return {
				showing:true
			}
		},
		computed:{
		},
		mounted(){
			this.$eventBus.$on('loading',this.showing)
		},
		methods:{
			closeLoding(){
				this.showing = false
			}
		}
	}
</script>
<style lang="scss" scoped>
	.app{
		background-color:white;
	}
</style>
