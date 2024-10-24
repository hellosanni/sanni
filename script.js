function handleSunRayAnimationEnd() {
  const loaderContent = document.getElementById("loader-content-container");
  loaderContent.classList.add("move-up");
  document.body.style.overflow = "auto"
}

window.addEventListener('load', function(){
  setTimeout(() => {
    handleSunRayAnimationEnd();
  }, 2500)
});
