  $(document).ready(function(){
  
  $(".li1").show();
   
    $(".li2").hide();
    $(".li3").hide();
    $(".li4").hide();



$(".arrow-left").toggle(


    function(){
   $(".li2").show();
  $(".li1").hide();
    $(".li4").hide();
    $(".li3").hide();
    },
    function(){

    $(".li3").show();
  $(".li1").hide();
$(".li4").hide();
    $(".li2").hide();
    },
function(){

    $(".li4").show();
  $(".li1").hide();
    $(".li2").hide();
$(".li3").hide();
    },

 function(){
   $(".li1").show();
  $(".li2").hide();
    $(".li4").hide();
    $(".li3").hide();
    }

  );



$(".arrow-right").toggle(
function(){
   $(".li4").show();
   $(".li2").hide();
$(".li3").hide();
    $(".li1").hide();
    },

function(){
   $(".li3").show();
   $(".li2").hide();
$(".li4").hide();
    $(".li1").hide();
    },
    function(){
   $(".li2").show();
  $(".li1").hide();
    $(".li4").hide();
    $(".li3").hide();
    },
   
   function(){
   $(".li1").show();
  $(".li2").hide();
    $(".li4").hide();
    $(".li3").hide();
    }

  );





});