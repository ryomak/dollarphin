<template>
	<div>
		<section>
			<h2>About</h2>
			<div>
				<p>関関同立で集まってフェスを開きませんか？<br></p>
				<p>これまで，他大学との交流は就活であったり，<br>サークルだけだと思います．</p>
				<p>この機会に多種多様な学生と繋がりを持ちましょう<br></p>
				<p>$Phin一同</p>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		name:"About"
	}
</script>
<style lang="scss" scoped>
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