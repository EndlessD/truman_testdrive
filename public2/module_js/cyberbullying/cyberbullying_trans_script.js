function startIntro(){
    var intro = introJs().setOptions({ 'hidePrev': true, 'hideNext': true, 'exitOnOverlayClick': false, 'showStepNumbers':false, 'showBullets':false, 'scrollToElement':true, 'doneLabel':'Done &#10003', 'tooltipClass':'blueTooltip'});
      intro.setOptions({
        steps: [
          {
            intro: "Now you get to explore the TestDrive timeline! You can read what others have posted, respond, or make your own posts."
          },
          {
            intro: "Here is some helpful background before you start: <br><a href='/user/DylanCrazzzzzy' target='_blank'><img class='ui avatar image' src='https://dhpd030vnpk29.cloudfront.net/profile_pictures/user19.jpg'><span>Dylan Goldstein</span></a> just moved into town and is new in school. <br>He loves to draw comics and spends most of recess sitting by himself drawing in his sketchbook."

          },
          {

            intro: "Some of Dylan’s classmates have started to make fun of him at school. <br>Last week, <a href='/user/memeking' target='_blank'> <img class='ui avatar image' src='https://dhpd030vnpk29.cloudfront.net/profile_pictures/user34.jpg'/><span>Keegan Scott</span></a> secretly took a picture of Dylan’s sketchbook. He posted the photo on social media with a mean comment."

          },
          {

            intro: "Since then, Keegan’s friends: <a href='/user/ella_vaderrr' target='_blank'> <img class='ui avatar image' src='https://dhpd030vnpk29.cloudfront.net/profile_pictures/user25.jpg'/><span>Ella Sroni</span></a> & <a href='/user/goaliegirl' target='_blank'> <img class='ui avatar image' src='https://dhpd030vnpk29.cloudfront.net/profile_pictures/user29.jpg'/><span>Breana Summers</span></a> have also been making fun of Dylan on social media."

          },
          {
            intro: "Now, let’s apply what you have learned! <br>Try to <b>spot and respond to cyberbullying posts or comments</b> on the TestDrive timeline. When you get to the end of the timeline, click “Let's Continue” to move to the next part of the lesson."

          }

        ]
      });
      intro.start().onexit(function() {
      window.location.href='/modual/cyberbullying';
    });


  };
  $(window).on("load", function() {startIntro();});
