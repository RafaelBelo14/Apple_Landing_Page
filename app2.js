const intro = document.querySelector("..end");
const video = intro.querySelector("video");
const text = intro.querySelector("h2");
const text2 = intro.querySelector("h3");
const text3 = intro.querySelector("p");
const text4 = intro.querySelector(".cta");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textAnim2 = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });
const textAnim3 = TweenMax.fromTo(text3, 3, { opacity: 1 }, { opacity: 0 });
const textAnim4 = TweenMax.fromTo(text4, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim2)
  .addTo(controller);


let scene4 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim3)
  .addTo(controller);

let scene5 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim4)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);
