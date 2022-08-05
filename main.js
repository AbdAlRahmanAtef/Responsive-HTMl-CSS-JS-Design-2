// Mega Menu
let links = document.querySelector(".main-nav .other-links");
let mega = document.querySelector(".other-links .mega");
console.log(mega);
links.onclick = () => {
  mega.classList.toggle("show");
};
// Scroll To Top
let scrollUp = document.querySelector(".scroll-up i");

// Fill Progress
let progessSection = document.querySelector(".skills");
let progessSpans = document.querySelectorAll(".skills .progress span");

// Count Up
let stateSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .number");
let started = false;

window.onscroll = () => {
  // Mega Menu
  mega.classList.remove("show");

  // Scroll To Top
  if (window.scrollY >= 600) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
  scrollUp.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fill Progess
  if (window.scrollY >= progessSection.offsetTop + progessSection.offsetHeight - window.innerHeight) {
    progessSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }

  // Count Up
  let stateSectionOffset = stateSection.offsetTop;
  if (window.scrollY > stateSectionOffset + stateSection.offsetHeight - window.innerHeight) {
    if (!started) {
      nums.forEach((num) => countUp(num));
    }
    started = true;
  }
};

function countUp(el) {
  let goal = el.dataset.want
  let counter = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML == goal) {
      clearInterval(counter);
    }
  }, 1000 / goal);
}


// Date Count Down
let targetDate = new Date("Dec 30, 2022 11:59:59").getTime();
let countDown = setInterval(() => {
  let date = new Date().getTime();
  let dateDiff = targetDate - date;

  // Days
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  // Hours
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

  // Minutes
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  // Seconds
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minuites").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;
}, 1000);