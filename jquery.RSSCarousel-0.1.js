(function($){
	$.fn.RSSCarousel = function() {

		var slides = $('#rss-images').children();
		var amount = slides.length;
		var i = 0;
		var fade = 2000;

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
			document.getElementById('rss-next').addEventListener('click', next);
			document.getElementById('rss-previous').addEventListener('click', previous);
		} else {
			$('#rss-next').hide();
			$('#rss-previous').hide();
		}
	};
})(jQuery);
