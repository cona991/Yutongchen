
(function($) {

	

	$(function() {

		var	$window = $(window),
			$body = $('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});



			$('.scrolly').scrolly();

			$('.gallery').each(function() {

				var	$gallery = $(this),
					$content = $gallery.find('.content');


					$content.poptrox({
						usePopupCaption: true
					});

					$gallery.each( function() {

							$media = $this.find('.media');

						$tabs.on('click', function(e) {

								$media
									.fadeOut('fast')
									.each(function() {

										var $this = $(this);

										

									});

						});

					});


			});

			



	});

})(jQuery);