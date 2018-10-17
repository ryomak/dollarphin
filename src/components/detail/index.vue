<template>
	<div>
		<h2 >Event Detail</h2>
		<div class="detail" >
			<div class="detail-box">
				<h2><span class="box-title">Schedule</span></h2>
				<div class="date">
					<p></p>
					<h5>2018年11月30日</h5>
					　<h5>17:00~20:00</h5>
				</div>
			</div>
			<div class="detail-box">
				<h2><span class="box-title">Agenda</span></h2>
				<div class="letter">
					<p>17:00 ~  open <br>more suprize<br>20:00 ~  close</p>
				</div>
			</div>
			<div class="detail-box">
				<h2><span class="box-title">Entrance Fee</span></h2>
				<div class="letter">
					<p>Men...3000yen<br> Women...3000yen <br>ワンドリンクチケット付き</p>
				</div>
			</div>
			<div class="detail-box">
				<h2><span class="box-title">Notice(参加条件）</span></h2>
				<div class="letter">
					<p> Men...関関同立京阪神の20歳以上の大学生<br>Women...20歳以上の大学生<br>当日は学生証のご提示お願いします．</p>
				</div>
			</div>
			<div class="detail-box">
				<h2><span class="box-title">Place</span></h2>
				<ul class="letter">
					<li>
						<p>〒542-0082 <br>大阪府大阪市中央区島之内<br>１丁目１８−８<br>ビルドアップ長堀橋ビル B1＆B2
						<br></p>
					</li>
				</ul>
			</div>
			<div class="detail-box">
				<h2><span class="box-title">Map</span></h2>
				<ul class="col2">
					<li>
						<div class="map">
							<!-- GOOGLE MAP -->
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.203164150161!2d135.5043997148711!3d34.674821580441034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e73d892eb2f7%3A0x8e46540b5e3b4312!2sG2!5e0!3m2!1sja!2sjp!4v1539260830171" width="200" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
							<!-- // GOOGLE MAP -->
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Detail"
	}
	
</script>
<style lang="scss" scoped>
.place p{
	margin-bottom: 5px;
}

.detail{
	text-align:center;
	display:flex;
	flex-wrap: wrap;
	justify-content:space-around;
	.detail-box{ 
		margin:1rem;
		position: relative;
		padding:0.25em 1em;
		@media (min-width:601px) { 
			width:30vw;
		}
		@media (max-width:600px) { 
			width:100vw;
		}
		&:before{
			content:'';
			width: 40px;
			height: 50px;
			position: absolute;
			display: inline-block;
			border-left: solid 3px #333333;
			border-top: solid 3px #333333;
			top:0;
			left: 0;
		}
		&:after{
			content:'';
			width: 40px;
			height: 50px;
			position: absolute;
			display: inline-block;
			border-right: solid 3px #333333;
			border-bottom: solid 3px #333333;
			bottom:0;
			right: 0;
		}

		h2 {
			font-size:197%;
			font-weight:bold;
			text-align:center;
		}
		p{
			margin: 0; 
			padding: 0;
		}
	}
	.date{
		

	}
	.letter{
		background-image:linear-gradient(90deg,rgba(204,204,204,0) 0%,rgba(204,204,204,0) 49%,rgba(255,255,255,100) 50%,rgba(255,255,255,100) 100%),linear-gradient(180deg,rgba(204,204,204,0) 0%,rgba(204,204,204,0) 98.5%,rgba(100,100,100,100) 100%);  
		background-repeat:repeat-x,repeat-y;
		background-size:4px 100%,100% 2.4em;
		line-height:2.5em;
		p {
			margin-bottom:2.4em;
			font-size:1.5em;
		}
	}
	.cols{
		li{
			display: inline-block;
			.map{
				position: relative;
				width:70%;
				height:0;
				padding-bottom: 56.25%;    /* padding-topでもOK */
				iframe{
					z-index: auto;
					top: 0;
					left: 0;
					width: 100% !important;
					height: 100% !important;
				}	
			}
			
		}
	}
}

</style>