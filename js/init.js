/*
	Twenty by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global:		{ range: '*', href: '/css/style.css', containers: 1400, grid: { gutters: 50 } },
			narrow:		{ range: '-980', href: '/css/style-narrow.css', containers: '95%', grid: { gutters: 30 } },
			narrower:	{ range: '-840', href: '/css/style-narrower.css', grid: { collapse: 1 } },
			mobile:		{ range: '-736', href: '/css/style-mobile.css', containers: '100%', grid: { gutters: 15, collapse: 2 } }
		},
		plugins: {
			layers: {
				config: {
					transformTest: function() { return (skel.vars.isMobile); }
				},
				topPanel: {
					states: '/global/narrow/narrower/mobile',
					position: 'top-center',
					side: 'top',
					hidden: true,
					animation: 'pushY',
					width: '100%',
					height: 275,
					html: '<nav data-action="navList" data-args="nav"></nav>',
					clickToHide: true,
					swipeToHide: false,
					orientation: 'vertical'
				},
				topButton: {
					states: '/global/narrow/narrower/mobile',
					position: 'top-center',
					width: 120,
					height: 50,
					html: '<span class="toggle" data-action="toggleLayer" data-args="topPanel"></span>'
				},
// 				sidePanel: {
// 					states: '/global/wide/normal/narrow/narrower',
// 					position: 'top-left',
// 					side: 'left',
// 					hidden: true,
// 					animation: 'revealX',
// 					width: 250,
// 					height: '100%',
// 					html: '<nav data-action="navList" data-args="nav"></nav>',
// 					clickToHide: true,
// 					orientation: 'vertical'
// 				},
// 				sideButton: {
// 					states: '/global/wide/normal/narrow/narrower',
// 					position: 'top-left',
// 					width: 100,
// 					height: 60,
// 					html: '<span class="toggle" data-action="toggleLayer" data-args="sidePanel"></span>'
// 				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
			
			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');
	});

})(jQuery);
