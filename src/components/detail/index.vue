<template>
	<div class="detail" >
		<div class="detail-box">
			<h2><span>Schedule</span></h2>
			<div class="date">
				<h5>2018年11月30日</h5>
				　<h5>17:00~20:00</h5>
			</div>
		</div>
		<div class="detail-box">
			<h2><span>Agenda</span></h2>
			<div class="letter">
				<p>17:00 ~  open <br>more suprize<br>20:00 ~  close</p>
			</div>
		</div>
		<div class="detail-box">
			<h2><span>Place</span></h2>
				<ul class="col2">
					<li>
						<p>〒542-0082 <br>大阪府大阪市中央区島之内１丁目１８−８</p>
						<p>ビルドアップ長堀橋ビル B1＆B2</p>
						<p>※都合により休業する場合がございます</p>
					</li>
					<li>
						<div class="map">
							<!-- GOOGLE MAP -->
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.203164150161!2d135.5043997148711!3d34.674821580441034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e73d892eb2f7%3A0x8e46540b5e3b4312!2sG2!5e0!3m2!1sja!2sjp!4v1539260830171" width="300" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
							<!-- // GOOGLE MAP -->
						</div>
					</li>
				</ul>
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
		text-align:center;
	}
	.date{
		
		padding-top:5rem;
	}
	.letter{
    	background-image:linear-gradient(90deg,rgba(204,204,204,0) 0%,rgba(204,204,204,0) 49%,rgba(255,255,255,100) 50%,rgba(255,255,255,100) 100%),linear-gradient(180deg,rgba(204,204,204,0) 0%,rgba(204,204,204,0) 98.5%,rgba(100,100,100,100) 100%);  
      	background-repeat:repeat-x,repeat-y;
      	background-size:4px 100%,100% 2.4em;
      	line-height:2.4;
        p {
          margin-bottom:2.4em;
          font-size:1.5rem;
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