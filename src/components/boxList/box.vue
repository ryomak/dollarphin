<template>
	<div class="box">
		<img :src="resolveImg(img)"/>
		<div v-if="out">
			<a :href="url">
				<div class="back">{{title}}</div>
			</a>
		</div>
		<div v-else>
			<router-link :to="url">
				<div class="back"></div>				
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Box",
		props:['title','img','url','out'],
		computed:{
			resolveImg(i){
				console.log(i)
				return require(i)
			}
		}
	}
	
</script>
<style lang="scss" scoped>
.box{
	position: relative;
    width: 100%;
  
	.back{
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	}
}
</style>