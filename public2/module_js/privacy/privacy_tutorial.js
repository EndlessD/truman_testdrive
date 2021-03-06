$('.ui.dropdown')
  .dropdown('set selected', '0');

function startIntro(){
    var intro = introJs().setOptions({ 'hidePrev': true, 'hideNext': true, 'exitOnOverlayClick': false, 'showStepNumbers':false, 'showBullets':false, 'scrollToElement':true, 'doneLabel':'Done &#10003' });
      intro.setOptions({
        steps: [
          {
            element: document.querySelectorAll('#step1')[0],
            intro: "When you sign up for an account on social media, be sure to check your <b>privacy settings</b>. You can control what information is visible to others. You can also go to this page to change your settings any time.",
            position: 'left',
            scrollTo: "tooltip"
          },
          {
            element: document.querySelectorAll('#step2')[0],
            intro: "A “<i>Public</i>” setting on your social media account means that it is visible to anyone on the internet. A “<i>Private</i>” setting will restrict access to your account so that only the people you approve can see the things that you post.",
            position: 'left',
            scrollTo: "tooltip"
          },
          {
            element: document.querySelectorAll('#step3')[0],
            intro: "Some social media sites will let you choose who can contact you. You can change who can add you as a friend on the site, comment on your posts, or tag you in posts.",
            position: 'left',
            scrollTo: "tooltip"
          },
          {
            element: document.querySelectorAll('#tagStep')[0],
            intro: "Changing these settings will stop people from being able to “<i>tag</i>” you in posts that you did not make. This way, you can control which posts show up on your profile.",
            position: 'left',
            scrollTo: "tooltip"
          },
          {
            element: document.querySelectorAll('#step4')[0],
            intro: "Here, you can change how you share your location information. You can choose to remove it completely or hide it from certain people.",
            position: 'right',
            scrollTo: "tooltip"
          }

        ]
      });
      intro.start().onexit(function() {
      window.location.href='/sim/privacy';
    });

  };

$(window).on("load", function() {startIntro();});
