<template>
	<div>
		<div v-for="b in boxes" class="display-box">
			<box :url="b.url" :img="b.img" :title="b.title" :out="b.out"/>
		</div>
	</div>
</template>
<script>
	import Box from "./box"
export default{
	name:"BoxList",
	components:{
		Box
	},
	props:['boxes']
}
	
</script>
<style lang="scss" scoped>
.display-box{
	display:flex;
	flex-wrap: wrap;
	justify-content:space-around;
}
</style>