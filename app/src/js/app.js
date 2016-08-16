'use strict';



// Import jQuery (if you need jquery);
import $ from 'jquery';
window.jQuery = $;
console.log($.fn.jquery);

import ScrollReveal from './modules/scrollreveal';

$(window).on('load', function(){
	window.sr = ScrollReveal().reveal('.header');
});
//
