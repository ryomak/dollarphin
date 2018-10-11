<template>
	<div class="box">
		<div v-if="out" >
			<span>
			<a :href="url">
				<img :src="resolveImg"/>
				<div class="mask">
					<div class="caption">{{title}}</div>
				</div>
			</a>
			</span>
		</div>
		<div v-else>
			<span>
			<router-link :to="url">
				<img :src="resolveImg"/>
				<div class="mask">
					<div class="caption">{{title}}</div>
				</div>				
			</router-link>
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Box",
		props:['title','img','url','out'],
		computed:{
			resolveImg(){
				return require("../../assets/img/boxList/"+this.img)
			}
		}
	}
	
</script>
<style lang="scss" scoped>
.box{
	position: relative;
 	border-radius: 10px;
    border: double 5px ;
    object-fit: cover;
    img{
    	border-radius: 5px;
    }
    .mask{
    	width:			100%;
		height:			100%;
		position:		absolute;	/* 絶対位置指定 */
		top:			0;
		left:			0;
		opacity:		0;	/* マスクを表示しない */
		background-color:	rgba(0,150,100,0.8);	/* マスクは半透明 */
		-webkit-transition:	all 0.4s ease;
		transition:		all 0.2s ease;
		.caption{
			font-size:		130%;
			text-align: 		center;
			padding-top:		80px;
			font-weight: bold;
			color:			#fff;
		}
    }
    &:hover{
    	.mask{
    		opacity:1;
    	}
    }
}
</style>