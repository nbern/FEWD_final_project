//here is where we actually set up the slides
var $carouselElements = $('.carousel');
var carousels = [];

// each is slightly different from forEach or a for loop, 
// but it's the same idea - iterate over the collection
// http://api.jquery.com/each/
$carouselElements.each(function(index, element){
	carousels.push(new Carousel($(element)));
});

//Display project when corresponding projectTitle button is clicked on
$(".projectTitle").click(function(){
	$(this).next().toggleClass("active");
}); 

//Open PDFs and external webpages in new tabs when clicked on
$("#resume").click(function(){
	window.open("Resume/Resume_Nicole Bernardi_UX design_9.12.15.pdf"); 
}); 

$("#ecoCar_featuredescription").click(function(){
	window.open("Images/Portfolio/ecoCar/Feature - description.pdf"); 
});

$("#ecoCar_uxtest").click(function(){
	window.open("Images/Portfolio/ecoCar/UX test.pdf"); 
});

$("#UC_final_Balsamiq").click(function(){
	window.open("Images/Portfolio/UC/Final project/Balsamiq wireframes.pdf"); 
}); 

$("#UC_final_flow").click(function(){
	window.open("Images/Portfolio/UC/Final project/Flows user research.pdf"); 
}); 

