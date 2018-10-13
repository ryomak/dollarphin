<template>
	<div>
		<footer class="page-footer white">
			<div class="container">
				<div class="row">
				<ul>
						<li class="spaceX" style="color:#333333">© 2018 Copyright  ryoma kurisu</li>
						<li><a href="#!"><img src="@/assets/img/footer/facebook.png"/></a></li>
						<li><a href="https://www.instagram.com/dollarphin/?hl=ja"><img src="@/assets/img/footer/instagram.png"></a></li>
				</ul>
			</div>
			</div>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"FooterComponent"
	}
	
</script>
<style scoped lang="scss">
	ul{
		text-align:right;
		.spaceX{
			margin-right:30px;
			font-size:1.3em;
		}
		text-align: right;
		li { 
			display: inline-block;

		}
		img{
			height:2rem;
		}
	}

</style>