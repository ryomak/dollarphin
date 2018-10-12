<template>
	<div>
		<section>
			<h2>$Phin</h2>
			<div>
				<p>昔々あるところ，平凡な毎日に飽きた学生がいました。</p>
				<p>学生はたまたまこのページに辿り着き，毎日の平凡な生活が一変しました</p>
				<p>ある日、おばあさんがコインランドリーに洗濯に行くと、乾燥機の中に大きなモモが、グワングワン回っていました。<br>おばあさんは「果物は温めない方が美味しいし！桃太郎の入ってたモモに似てる！」と思い取り出すと、周囲に誰もいないことを確認した上で家へ持ち帰りました。</p>
				<p>すると…5LDKの家に帰るや否やモモから元気な男の子が飛び出してきました。<br>二人は男の子に「ももじろう」という名前をつけ幸せに暮らしましたとさ。</p>
				<p>めでたしめでたし</p>
			</div>
		</section>
		<h2>Contents</h2>
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
				{url:"/detail",img:"detail.png",title:"詳細",out:false},
				{url:"https://goo.gl/forms/DvLJ301P79DJsxgi1",img:"pre-register.png",title:"事前登録",out:true},
				{url:"/about",img:"about-us.png",title:"ABOUT US",out:false},
				{url:"/contact",img:"contact.png",title:"お問い合わせ",out:false},
				]
			}
		}
	}
	
</script>
<style lang="scss" scoped>
img{
	width:50%;
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
</style>