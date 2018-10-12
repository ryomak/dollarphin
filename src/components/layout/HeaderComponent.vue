<template>
	<div>
		<nav>
			<div class="nav-wrapper teal lighten-2">
				<router-link to="/"><a class="brand-logo">$Phin</a></router-link>
					<ul class="right hide-on-med-and-down">
						<li><router-link to="/">Top</router-link></li>
						<li><router-link to="/detail">Detail</router-link></li>
						<li><router-link to="/about">About</router-link></li>
						<li><router-link to="/contact">Contact</router-link></li>
					</ul>
				<Slide   
					v-show="isMobile"
					noOverly
					>
						<span><i class="material-icons prefix">home</i>  <a @click="goto('/')"> Top</a></span>
						<span><i class="material-icons prefix">details</i>  <a @click="goto('/detail')"> Detail</a></span>
						<span><i class="material-icons prefix">assignment</i>  <a @click="goto('/about')"> About</a></span>
						<span><i class="material-icons prefix">contact_mail</i>  <a @click="goto('/contact')"> Contact</a></span>
				</Slide>
			</div>
		</nav>
	</div>
</template>
<script>
	import { Slide } from 'vue-burger-menu'
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


/*---------*/
	.bm-burger-button {
      position:absolute;
      top:17px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #3a7a7a;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #ffffff;
    }
    .bm-cross-button {
      height: 30px;
      width: 30px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #009688; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
      box-shadow: 20px;
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0);
    }
    .bm-item-list {
     	color: #ffffff;
     	margin-left: 10%;
    	font-size: 2em;
    	/*material overwrite*/
    	background-color:#009688;
    	height:0;
    }
    .bm-item-list > * {
      display: flex;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
     	margin-left: 10px;
     	font-weight: 700;
      	color: white;
      	a{
      		&:hover{
      			color:black;
      		}
  		}
    }


</style>