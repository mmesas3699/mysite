<template>
	<header class="row m-0 px-sm-5 px-2 py-2" style="background-color: black;">
		<a href="." class="nav-link text-white">
			<svg class="bi bi-code-slash" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"/>
			</svg>
		</a>
		<ul class="nav ml-auto">
			<li class="nav-item">
				<a href="." class="nav-link text-white">inicio</a>
			</li><!-- 
			<li class="nav-item">
				<a href="/news" class="nav-link text-white">news</a>					
			</li> -->
			<li class="nav-item">
				<a href="/about" class="nav-link text-white">acerca de mi</a>
			</li>
		</ul>
	</header>
</template>
<script>
export default {
	name: 'HmHeader',
}
</script>