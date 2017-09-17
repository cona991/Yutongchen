
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

			$('.userinfo').each(function() {

				var	$userinfo = $(this),
					$Login = $userinfo.find('.Login');


				// Poptrox.
					$Login.poptrox({
						usePopupCaption: true
					});

					

				// Tabs.
					$userinfo.each( function() {

						//var $this = $(this),
							//$tabs = $this.find('.tabs a'),
							$page = $this.find('.page');

						$tabs.on('click', function(e) {

							//var $this = $(this),
								//tag = $this.data('tag');

							

							// Hide media that do not have the same class as the clicked tab.
								$page
									.fadeOut('fast')
									.each(function() {

										var $this = $(this);

										

									});

						});

					});


			});



	});

})(jQuery);