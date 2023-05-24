const preloader = document.querySelector(".container");
const waterWave = document.querySelector(".water_wave");

window.addEventListener("load", () => {
  preloader.classList.add("container-hidden");
  waterWave.classList.add("water_wave-hidden");

  preloader.addEventListener("transitionend", () => {
    preloader.remove("div");
  });
});
