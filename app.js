const selectElement = (element) => document.querySelector(element);


selectElement('.mobile-menu').addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});

const intro = document.querySelector(".intro");
const second = document.querySelector(".end");
const video = intro.querySelector("video");
const video2 = second.querySelector("video");
const text = intro.querySelector("h2");
const text2 = intro.querySelector("h3");
const text3 = intro.querySelector("p");
const text4 = intro.querySelector(".cta");
const second_text = second.querySelector("h2");
const second_text2 = second.querySelector("h3");
const second_text3 = second.querySelector("p");
const second_text4 = second.querySelector(".cta-end");
//END SECTION
const section = document.querySelector(".s1");
const end = section.querySelector("h1");
const second_section = document.querySelector(".s2");
const second_end = second_section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

let second_scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: second,
  triggerHook: 0
})
  .setPin(second)
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

//Second Text Animation

const second_textAnim = TweenMax.fromTo(second_text, 3, { opacity: 1 }, { opacity: 0 });
const second_textAnim2 = TweenMax.fromTo(second_text2, 3, { opacity: 1 }, { opacity: 0 });
const second_textAnim3 = TweenMax.fromTo(second_text3, 3, { opacity: 1 }, { opacity: 0 });
const second_textAnim4 = TweenMax.fromTo(second_text4, 3, { opacity: 1 }, { opacity: 0 });

let second_scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: second,
  triggerHook: 0
})
  .setTween(second_textAnim)
  .addTo(controller);

let second_scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: second,
  triggerHook: 0
})
  .setTween(second_textAnim2)
  .addTo(controller);


let second_scene4 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: second,
  triggerHook: 0
})
  .setTween(second_textAnim3)
  .addTo(controller);

let second_scene5 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: second,
  triggerHook: 0
})
  .setTween(second_textAnim4)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;
let scrollpos2 = 0;
let delay2 = 0;


scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
  console.log(scrollpos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);

second_scene.on("update", e => {
  scrollpos2 = e.scrollPos / 1000 - 6;
  console.log(scrollpos2);
});

setInterval(() => {
  delay2 += (scrollpos2 - delay2) * accelamount;

  video2.currentTime = delay2;
}, 33.3);

