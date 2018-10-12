<template>
	<div>
		<section>
			<h2>About Us</h2>
			<div>
				<p>僕たちは同志社4回生で立ち上げた団体です<br></p>
				<p>最後の学生生活，最後思い出に残る楽しいことを起こしたい!みんなで楽しめるイベントを作りたい!!<br>という理由から立ち上げました</p>
				<p>このイベントは関関同立京阪神の学生を集めて，楽しみながら交流できるイベントです！<br>テンポの良い音楽と共にみんなで楽しみましょう!!</p>
				<p>もし「ご質問」や<strong style="font:bold">「こんなコンテンツ楽しそう」</strong>というようなアイデアがあれば，<router-link to="/contact">こちら</router-link>まで！<br>お待ちしております！</p>
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