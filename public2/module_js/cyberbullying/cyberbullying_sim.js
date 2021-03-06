let clickCount = 0;
let counter = 0;
const numberOfHints = 4;

//showing the "Need some help?" guidance message
function showHelp(){
  if($('#removeHidden').is(":hidden")){
    if(counter != numberOfHints){
      //user does not know to click blue dots
      $('#removeHidden').transition('fade');
      $('#cyberTransButton').css('margin-bottom', '10em');
    }
  }
};

function errorCheck(){
  if(counter != numberOfHints){
    //show the message normally the first time
    if($('#clickAllDotsWarning').is(":hidden")){
      $('#clickAllDotsWarning').transition('fade');
      $('#cyberTransButton').css("margin-bottom", "10em");
    }else{
      //otherwise, bounce the message to draw attention to it
      $('#clickAllDotsWarning').transition('bounce');
    }
  }
};

function startHints(){
  window.scrollTo(0,0);

  var hints = introJs().setOptions({
    hints: hintsList
  });

  hints.addHints();

  //for providing guidance message
  hints.onhintclick(function() {
      clickCount++;
      if(clickCount >= numberOfHints){
        //show the guidance message, user probably doesn't know to click "got it"
        if($('#removeHidden').is(":hidden")){
          $('#removeHidden').transition('fade');
          $('#cyberTransButton').css('margin-bottom', '10em');
        } else {
          $('#removeHidden').transition('bounce');
        }
      }
  });

  hints.onhintclose(function() {
     counter++;
     clickCount = 0;
     if($('#removeHidden').is(":visible")){
       $('#removeHidden').transition('fade');
       if($('#clickAllDotsWarning').is(":hidden")){
         $('#cyberTransButton').css("margin-bottom", "4em");
       }
     }
     if(counter == numberOfHints) {
       if($('#clickAllDotsWarning').is(':visible')){
         $('#clickAllDotsWarning').transition('fade');
         $('#cyberTransButton').css("margin-bottom", "4em");
       }
       $( ".cybertrans" ).addClass("green");
     }
  });

  setInterval(showHelp, 120000);
};


function startIntro(){

  var intro = introJs().setOptions({
    'hidePrev': true, 'hideNext': true, 'exitOnOverlayClick': false,
    'showStepNumbers':false, 'showBullets':false, 'scrollToElement':true,
    'doneLabel':'Done &#10003'
  });
    intro.setOptions({
      steps: stepList
    });
    intro.start().onexit(startHints);
    $('#cyberTransButton').on('click', errorCheck);

};

$(window).on("load", startIntro);
