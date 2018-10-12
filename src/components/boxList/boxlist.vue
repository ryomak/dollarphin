<template>
	<div class="display-box">
		<ul>
			<li v-for="b in boxes" >
						<box :url="b.url" :img="b.img" :title="b.title" :out="b.out"/>
			</li>
		</ul>
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
	ul{
		display:flex;
		flex-wrap:wrap;
	}
}
@media (min-width:601px) { 
	li{
		width:50vw;
	}
}
@media (max-width:600px) { 
	li{
		width:100vw;
	}
}
</style>