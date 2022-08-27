function navlinks() {
  const nav = ["About", "Blog", "Tour", "Contact"];
  const navhref = ["#about", "#blog", "#tour", "#contact"];

  for (let i = 0; i < nav.length; i++) {
    const newli = document.createElement("li");
    const newa = document.createElement("a");
    newa.textContent = nav[i];
    newa.href = navhref[i];
    newli.appendChild(newa);
    document.getElementById("nav").appendChild(newli);
  }
}

// const nav = ["home", "about", "gallery", "contact"];

// let navlength = nav.length;
// let navtext = "<ul>";

// for (let i = 0; i < navlength; i++) {
//   navtext += '<li><a href="">' + nav[i] + "</a></li>";
// }
// navtext += "</ul>";

// document.getElementById("nav").innerHTML = navtext;

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, { y: -1000 })
  .to(".paraplan", 5, { x: -1600, y: 300 })
  .to(".girl", 50, { y: -50 }, "-=10")
  .fromTo(".bg1", { y: -75 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

const texts = ["LIFE", "ADVENTURE", "DREAM"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.getElementById("tyiping").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 400);
})();

window.onscroll = () => {
  const header = document.querySelector("header");
  if (this.scrollY <= 3000) header.className = "";
  else header.className = "activeheader";
  console.log(this.scrollY);
};

// Responsive Navbar Toggle
$("#nav").click(function () {
  $("#nav").toggleClass("responsive-nav");
});
// Owl Carousal
$("#owl-slider").owlCarousel({
  items: 1,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
  },
});

navlinks();

//help
const btn = document.querySelector(".helpbtn");

btn.addEventListener("click", function () {
  const helptext = document.querySelector(".help-text");
  console.log("hello");
  helptext.classList.toggle("helptextactive");
});

//end help
