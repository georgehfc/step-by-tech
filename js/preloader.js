window.addEventListener("load", () => {
  const waterWave = document.querySelector(".water_wave");
  const container = document.querySelector(".container");

  waterWave.classList.add("water_wave-hidden");
  container.classList.add("container-hidden");

  container.addEventListener("transitionend", () => {
    container.remove("div");
  });

});
