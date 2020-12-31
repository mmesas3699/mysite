<template>
	<div class="container-fluid p-0 h-100">
		<HmHeader/>
		<main class="p-5 text-white" style="background-color: black;">
      <div class="row pl-sm-5 pb-5" style="margin-top: 15em;">
        <p class="h1">Hola soy Miguel, desarrollador backend con 2 años de experiencia trabajando con Python, Django y Flask.</p>
      </div>

      <div class="pb-3 pt-5 pl-sm-2">
        <ul class="nav">
          <a href="mailto:mmesa_@hotmail.com" class="nav-link text-white">Email</a>
          <a href="https://github.com/mmesas3699" class="nav-link text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/miguel-angel-mesa-salazar-aa8680110/" class="nav-link text-white">LinkedIn</a>
          <a href="https://www.hackerrank.com/mmesas369" class="nav-link text-white">Hackerrank</a>
        </ul>
      </div>
    </main>
		<HmFooter/>
	</div>
</template>
<script>
import HmHeader from '@/components/home/HmHeader'
import HmFooter from '@/components/home/HmFooter'

export default {
	name: 'Home',
	components: {
		HmHeader,
		HmFooter,
	}
}
</script>