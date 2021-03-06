/*
 * Really Simple and Stupid Carousel Plugin for jQuery
 *
 * Version 0.1
 *
 * Copyright 2013, Teemu Tiilikainen
 * Licensed under the Do What The Fuck You Want To Public License.
 *
*/

(function($){
	$.fn.RSSCarousel = function(fade) {

		var slides = $('#rss-images').children();
		var amount = slides.length;
		var i = 0;

		var next = function() {
			$(slides[i]).fadeOut(fade);
			i == (amount-1) ? i = 0 : i++;
			$(slides[i]).fadeIn(fade);
		};

		var previous = function() {
			$(slides[i]).fadeOut(fade);
			i == 0 ? i = (amount-1) : i--;
			$(slides[i]).fadeIn(fade);
		};

		if(amount > 1){
			$('#rss-next').show();
			$('#rss-previous').show();
			$('#rss-next').on('click', next);
			$('#rss-previous').on('click', previous);
		} else {
			$('#rss-next').hide();
			$('#rss-previous').hide();
		}
	};
})(jQuery);
