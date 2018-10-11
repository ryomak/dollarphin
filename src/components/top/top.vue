<template>
	<div>
		<img src="@/assets/img/top.jpg">
		<box-list :boxes="boxes"/>
	</div>
</template>
<script>
	import BoxList from '@/components/boxList/boxlist'
export default{
	name:"Top",
	components:{
		BoxList,
	},
	data(){
		return{
			boxes:[
				{url:"/detail",img:"@/assets/img/boxList/box1.png",title:"詳細",out:false},
				{url:"https://goo.gl/forms/DvLJ301P79DJsxgi1",img:"@/assets/img/boxList/box1.png",title:"事前登録",out:true},
			]
		}
	}
}
	
</script>
<style lang="scss" scoped>
	img{
		width:50%;
	}
</style>