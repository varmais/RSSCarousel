# RSSCarousel

Really Simple and Stupid Carousel jQuery plugin. This plugin does not brag with options and features.  

RSSCarousel uses overlays to switch slides.  

Demo: http://imari.varmais.fi/rsscarousel/

### Get Started

To use this plugin, you need to include both js and css in your html.

	<link rel="stylesheet" type="text/css" href="jquery.RSSCarousel-0.1.css" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="jquery.RSSCarousel-0.1.js"></script>

HTML code needed for carousel:

	<div id="rss-container">
		<ul id="rss-images">
			<li><img src="examples/pic1.jpg" /></li>
			<li><img src="examples/pic2.jpg" /></li>
			<li><img src="examples/pic3.jpg" /></li>
		</ul>
		<div id="rss-previous" class="overlay left"></div>
		<div id="rss-next" class="overlay right"></div>
	</div>

Then just load the plugin in document ready block:

	$(document).ready(function() {
		$('#rss-images').RSSCarousel();
		// you can also pass fade time as a parameter
		// $('#rss-images').RSSCarousel(2500);
	});


### License

	DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
    Version 2, December 2004 

 	Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 	Everyone is permitted to copy and distribute verbatim or modified 
 	copies of this license document, and changing it is allowed as long 
 	as the name is changed. 

    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   	TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

 	0. You just DO WHAT THE FUCK YOU WANT TO.