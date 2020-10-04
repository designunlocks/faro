//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function(){

    // cambio l'altezza dello slider in base all'altezza della finestra
    var windowHeight = $(window).height(),
		topSection = $('.slider-item');
	topSection.css('height', windowHeight);

	$(window).resize(function(){
		var windowHeight = $(window).height();
		topSection.css('height', windowHeight);
	});

    // attivo lo slider
    jQuery("#slider").slippry({
        elements:'.slider-item',
        adaptiveHeight: true,
        pager:false
    });

    // attivo il menu per la versione responsive
    jQuery("#nav ul").slicknav({
        brand:'<img src="img/faro_logo_nav.svg" />'
    });

    // attivo il filtraggio sul portfolio
    jQuery("#portfolio-wrapper").mixItUp();

    // attivo il carousel
    jQuery("#team-carousel").owlCarousel({
        items: 4,
        autoPlay: true,
        loop: true
    });

    // attivo lo scroller per il menu
    var s = skrollr.init();
    skrollr.menu.init(s, {
			change: function(hash, top) {
				console.log(hash, top);
			}
		});

});
