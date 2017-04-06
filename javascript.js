$(document).ready(function() {

	$.get( "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", function( data ) {
		console.log(data.date);
		$("#title").text(data.title);
		$("#date").text(data.date);
		$("#explanation").text(data.explanation);
		$("#photo").attr("src", data.url);

	});
});