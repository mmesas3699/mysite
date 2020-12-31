<template>
	<div class="mt-3 p-2" id="articles">
		<h4><a :href="page_url" target="_blank" id="title">{{page}}</a></h4>
		<ul class="list-group list-group-flush">
			<li v-for="article in articles" :key="article.title" class="list-group-item p-0">
				<a id="article" target="_blank" :href="article.link" data-toggle="tooltip" data-placement="auto" :title="article.epigraph">
					{{article.title}}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>

window.$(document).ready(function(){
  window.$('[data-toggle="tooltip"]').tooltip();
});

export default {
	name: 'NewsArticles',
	props: {
		page: String,
		page_url: String,
		articles: Array,
	}
}
</script>

<style>
div#articles {
	width: 33%;
}

a#title {
	color: Tomato;
	font-weight: bold;
}

a#article {
	color: black;
	font-size: 0.875em;
}
</style>