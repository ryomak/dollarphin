<template>
	<div>
		<nav>
			<div class="nav-wrapper">
				<router-link to="/"><a class="brand-logo">$Phin</a></router-link>
				<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
				<ul class="right hide-on-med-and-down">
					<li><router-link to="/">Top</router-link></li>
					<li><router-link to="/detail">Detail</router-link></li>
					<li><router-link to="/about">About</router-link></li>
					<li><router-link to="/contact">Contact</router-link></li>
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-demo">
			<li><router-link to="/">Top</router-link></li>
			<li><router-link to="/detail">Detail</router-link></li>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
		</ul>

	</div>
</template>
<script>
	export default{
		name:"HeaderCompont"
	}
	
</script>
<style scoped>
/*---------*/


nav ul#nav-mobile li:first-child a {overflow: auto;}


/*---------*/

</style>