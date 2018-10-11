<template>
	<div class="detail" >
		<div class="detail-box">
			<h2><span>Schedule</span></h2>
			<div>
				2018年11月13日　18:00~21:00
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
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.203164150161!2d135.5043997148711!3d34.674821580441034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e73d892eb2f7%3A0x8e46540b5e3b4312!2sG2!5e0!3m2!1sja!2sjp!4v1539260830171" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
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

.col2 li{
	display: inline-block;
	width: 100%;
	margin: 20px 0;
}
.detail{
	text-align:center;
	display:flex;
	flex-wrap: wrap;
	justify-content:space-around;
	.detail-box{
		text-align:center;
	}
	.map{
		position: relative;
		padding-bottom: 75%;
		height: 0;
		overflow: hidden;
		z-index: 0;
		iframe{
			position: absolute;
			top: 0;
			left: 0;
			width: 80% !important;
			height: 80% !important;
			border: 0;
		}	
	}
}

</style>