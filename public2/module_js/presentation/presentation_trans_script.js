$(window).on("load", function() {startIntro()});
function startIntro(){
    var intro = introJs().setOptions({ 'hidePrev': true, 'hideNext': true, 'exitOnOverlayClick': false, 'showStepNumbers':false, 'showBullets':false, 'scrollToElement':true, 'doneLabel':'Done &#10003', 'tooltipClass':'blueTooltip' });
      intro.setOptions({
        steps: [
          {
            intro: "Now you get to explore the TestDrive timeline! You can read and respond to what others have posted, or make your own posts."
          },
          {
            intro: "Pretend you are on a social media timeline, and that you have a close friend named Elena. Look out for posts from Elena."
          },
          {
            intro: "She has a real account <img class='ui avatar image' src='https://dhpd030vnpk29.cloudfront.net/profile_pictures/elenaprofpic.jpg'><span> <b>Elena Anderson</b></span></a> for family and friends, and a spam account <img class='ui avatar image' src='https://dhpd030vnpk29.cloudfront.net/profile_pictures/elenawhoprof.jpg'><span> <b> elena who </b></span></a> for close friends only. You follow both of her accounts."
          },
          {
            intro: "Look through Elena’s posts. How are the posts in her two accounts different? Think about her audience for each."
          },
          {
            intro: "You can also try creating a post that is okay for a broad social media audience, such as your friends and family. When you get to the bottom of the page, click “Let's Continue” to go on."
          }
        ]
      });
      intro.start().onexit(function() {
      window.location.href='/modual/presentation';
    });
  };
