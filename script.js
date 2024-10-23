function handleSunRayAnimationEnd() {
  const loaderContent = document.getElementById("loader-content-container");
  loaderContent.classList.add("move-up");
  document.body.style.overflow = "auto"
}

setTimeout(() => {
  handleSunRayAnimationEnd();
}, 3000)
