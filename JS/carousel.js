// requires jquery
// This type of function is known as a constructor. It's meant to be
// used with JavaScript's "new" keyword. Notice that the function
// begins with a capital letter. This is a convention to distingush
// a constructor from other functions

function Carousel($element){
	this.activeSlide = 0;
	// prepending the $ symbol denotes a jQuery object
	this.$slides = $element.find('.slide');
	this.$nextButton = $element.find('.next');
	this.$prevButton = $element.find('.previous');

	//attach event handlers
	// bind() allows us to hack the value of 'this'.
	// in an event handler 'this' refers to the DOM element we clicked on
	// here we want to use this in reference to the Carousel object
	this.$nextButton.on('click', function(){
		this.incrementIndex();
		this.setSlide();

	}.bind(this));

	this.$prevButton.on('click', function(){
		this.decrementIndex();
		this.setSlide();
	}.bind(this));	

	//set to first slide
	this.setSlide();
}


Carousel.prototype.incrementIndex = function(){
	this.activeSlide++;
	this.activeSlide %= this.$slides.length; //constrain the index
}

Carousel.prototype.decrementIndex = function(){
	this.activeSlide--;
	if(this.activeSlide < 0){
		this.activeSlide = this.$slides.length -1; //go to the last item
	}
}

Carousel.prototype.setSlide = function(){
	this.$slides.each(function(index, element){
		$(element).removeClass('active');
	})
	this.$slides.eq(this.activeSlide).addClass('active');
}