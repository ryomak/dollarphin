<template>
	<div>
		<transition name="fade">
			<div id="app" v-show="showing">
				<first @close="closeLoding"/>
			</div>
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
	#app{
		background-color:white;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .8s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>
