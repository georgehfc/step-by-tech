window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  preloader.classList.add("preloader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("preloader");
  })
})
