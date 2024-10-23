function handleSunRayAnimationEnd() {
  const loaderContent = document.getElementById("loader-content-container");
  loaderContent.classList.add("move-up")
}


setTimeout(() => {
  handleSunRayAnimationEnd();
}, 3000)