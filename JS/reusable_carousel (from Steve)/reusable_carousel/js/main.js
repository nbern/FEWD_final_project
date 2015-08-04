//here is where we actually set up the slides
var $carouselElements = $('.carousel');
var carousels = [];

// each is slightly different from forEach or a for loop, 
// but it's the same idea - iterate over the collection
// http://api.jquery.com/each/
$carouselElements.each(function(index, element){
	carousels.push(new Carousel($(element)));
});