

$(document).ready(function(){
$('.fa-hamburger').click(function(){
  $(this).toggleClass('fa-times');
  $('navbar').toggleClass('navbar-toggle');
  });
  
  $(' navbar a').click(function(){
  $('.fa-hamburger').removeClass('fa-times');
  $('navbar').removeClass('navbar-toggle');
  });
 




$('.dot1').click(function(){
$('.vid1').css('display','block');
$('.vid2').css('display','none');
$('.vid3').css('display','none');
});


$('.dot2').click(function(){
$('.vid2').css('display','block');
$('.vid1').css('display','none');
$('.vid3').css('display','none');
});

$('.dot3').click(function(){
$('.vid3').css('display','block');
$('.vid1').css('display','none');
$('.vid2').css('display','none');
});
});



var photos=["images/dish1.jpg","images/dish2.jpg","images/dish3.jpg"];
var imgTag=document.querySelector("img");

var count= 0;

function next(){
count++;
if(count>=photos.length){
count= 0;
imgTag.src=photos[count];

}else{
imgTag.src=photos[count];

};


imgTag.src=photos[count];

}

function prev(){

};


