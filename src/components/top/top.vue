<template>
	<div>
		<img src="@/assets/img/top.jpg" />
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
				{url:"/detail",img:"detail.jpg",title:"イベント詳細",out:false},
				{url:"https://goo.gl/forms/DvLJ301P79DJsxgi1",img:"pre-register.jpg",title:"事前登録",out:true},
				{url:"/about",img:"about-us.jpg",title:"私たちについて",out:false},
				{url:"/contact",img:"contact.jpg",title:"お問い合わせ",out:false},
				]
			}
		}
	}
	
</script>
<style lang="scss" scoped>
@media (min-width:601px) { 
	img{
		width:100vw;
	}
}
@media (max-width:600px) { 
	img{
		object-position:3% 100%; 
	}
}
div{
	img{
		width:100vw;
		object-fit: cover; 
	}
	section {
	  margin:0 auto;
	  padding:20px;
	  width:80%;
	    h2 {
	      font-size:197%;
	      font-weight:bold;
	      text-align:center;
	    }
	    div {
	      background-image:linear-gradient(90deg,rgba(204,204,204,0) 0%,rgba(204,204,204,0) 49%,rgba(255,255,255,100) 50%,rgba(255,255,255,100) 100%),linear-gradient(180deg,rgba(204,204,204,0) 0%,rgba(204,204,204,0) 98.5%,rgba(100,100,100,100) 100%);  
	      background-repeat:repeat-x,repeat-y;
	      background-size:4px 100%,100% 2.4em;
	      line-height:2.4;
	        p {
	          margin-bottom:2.4em;
	        }
	    }
	}
}
</style>