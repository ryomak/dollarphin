<template>
	<div>
		<nav>
			<div class="nav-wrapper teal lighten-2">
				<router-link to="/"><a class="brand-logo">$Phin</a></router-link>
					<ul class="right hide-on-med-and-down">
						<li><router-link to="/">Top</router-link></li>
						<li><router-link to="/detail">Event</router-link></li>
						<li><router-link to="/about">About Us</router-link></li>
						<li><router-link to="/contact">Contact</router-link></li>
						<li><a target="_blank" href="https://goo.gl/forms/DvLJ301P79DJsxgi1">事前登録</a></li>
					</ul>
				<Slide   
					v-show="isMobile"
					noOverly
					>
						<span><i class="material-icons prefix">home</i>  <a class="hover-text"@click="goto('/')"> Top</a></span>
						<span><i class="material-icons prefix">details</i>  <a @click="goto('/detail')">Event</a></span>
						<span><i class="material-icons prefix">assignment</i>  <a @click="goto('/about')"> About Us</a></span>
						<span><i class="material-icons prefix">contact_mail</i>  <a @click="goto('/contact')"> Contact</a></span>
						<span><i class="material-icons prefix">web</i><a target="_blank" href="https://goo.gl/forms/DvLJ301P79DJsxgi1">登録</a></span>
				</Slide>
			</div>
		</nav>
	</div>
</template>
<script>
	import  Slide  from '@/components/side/slide'
	export default{
		name:"HeaderCompont",
		data(){
			return{
				openSide:false
			}
		},
		components:{
			Slide
		},
		computed:{
			isMobile(){
				return window.innerWidth<993
			}
		},
		methods:{
			goto(uri){
				document.getElementById('sideNav').style.width = '0px';
				this.$router.push(uri)
			}
		}
	}
	
</script>
<style lang="scss">
/*---------*/


nav ul#nav-mobile li:first-child a {overflow: auto;}



</style>