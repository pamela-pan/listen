//global variables: stop after first play
let alreadyPlaying = false;
let clicked = false;

function sound1(){
  if (!alreadyPlaying) {
  let soundWave = new Audio("sounds/audioFinal.mp3")
  soundWave.play();
  alreadyPlaying = true;
}
}


//onload page
//
// // When the user clicks on div, open the popup
// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }
//
// var hiddenCharacter = 20;

//onclick: fade in final top poem

// var top1 = document.getElementById('top');

function top1() {

setTimeout(function() {
  document.getElementById("top").style.opacity="1";},217000);
}
document.body.addEventListener('click', top1)

//onclick body: moonAnimation

//trigger all elements
function bodyClick(){
  if (!clicked) {
    start1();
    start2();
    start3();
    start4();
    cap1();
    // cap2();
    // cap3();
    // cap4();
    // cap5();
    // cap6();
  }
  clicked = true;
}

document.body.addEventListener('click', bodyClick)

function start1() {
    document.getElementById('first').style.display='block';
  }

  //onclick body: cricektAnimation

  function start2() {
      document.getElementById('cricket').style.display='block';
    }

  //onclick body: windAnimation

    function start3() {
        document.getElementById('wind').style.display='block';
      }

//onclick body: leafAnimation

        function start4() {
            document.getElementById('leaf').style.display='block';
          }

//onclick cap1
//var cap1 = document.getElementById('cap1');

 function cap1() {

setTimeout(function() {
  document.getElementById("cap1").style.opacity="1";},4000);
  setTimeout(function() {
    document.getElementById("cap1").style.opacity="0";},31000);
    setTimeout(function() {
      document.getElementById("cap1").style.display="none";},31500);

      setTimeout(function() {
        document.getElementById("cap_moon").style.opacity="1";},32000);
        setTimeout(function() {
          document.getElementById("cap_moon").style.opacity="0";},40000);
          setTimeout(function() {
            document.getElementById("cap_moon").style.display="none";},41000);

        setTimeout(function() {
         document.getElementById("cap2").style.display="block";},500);
         setTimeout(function() {
           document.getElementById("cap2").style.opacity="1";},78000);
         setTimeout(function() {
           document.getElementById("cap2").style.opacity="0";},79000);

         setTimeout(function() {
          document.getElementById("cap3").style.display="block";},98000);
          setTimeout(function() {
            document.getElementById("cap3").style.opacity="1";},113000);
          setTimeout(function() {
            document.getElementById("cap3").style.opacity="0";},113500);

            setTimeout(function() {
             document.getElementById("cap4").style.display="block";},136000);
             setTimeout(function() {
               document.getElementById("cap4").style.opacity="1";},152000);
             setTimeout(function() {
               document.getElementById("cap4").style.opacity="0";},153000);

               setTimeout(function() {
                document.getElementById("cap5").style.display="block";},182000);
                setTimeout(function() {
                  document.getElementById("cap5").style.opacity="1";},208000);
                setTimeout(function() {
                  document.getElementById("cap5").style.opacity="0";},209000);
               }

               setTimeout(function() {
                document.getElementById("cap6").style.display="block";},217000);
                setTimeout(function() {
                  document.getElementById("cap6").style.opacity="1";},415000);
                setTimeout(function() {
                  document.getElementById("cap6").style.opacity="0";},420000);
//
//
// function cap4() {
//
// }
//
// function cap5() {
//
// setTimeout(function() {
//  document.getElementById("cap5").style.display="block";},182000);
//  setTimeout(function() {
//    document.getElementById("cap5").style.opacity="1";},208000);
//  setTimeout(function() {
//    document.getElementById("cap5").style.opacity="0";},209000);
// }
//
// function cap6() {
//
// setTimeout(function() {
//  document.getElementById("cap6").style.display="block";},217000);
//  setTimeout(function() {
//    document.getElementById("cap6").style.opacity="1";},415000);
//  setTimeout(function() {
//    document.getElementById("cap6").style.opacity="0";},420000);
// }


  // create a for loop that loops as many times as there are elements in the array
  //for (var i = 0; i < hiddenCharacter.length; i++) {
  //  var text = hiddenCharacter[i];
  //  console.log(text)

  // at first, just put a console.log into the for loop to see if it works
  // e.g. console.log("works")；

  // in each iteration of the loop, you pull the next element out of the array
  // eg first loop, you deal with the first elememt
  // second loop, you deal with the second...
  // "deal" means you will change that element's style.visibility property to "visible"
