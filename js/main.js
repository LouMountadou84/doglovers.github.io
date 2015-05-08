/* This is a comment*/
//wait until the HTML document has loaded
$(function() {

   //When the user clicks on a H3 element
   $('h3').click(function() {
   	/* Get the clicking element and hide the one after it */
   	 $('h3').next().slideToggle(3000);

    });


});