window.addEventListener('load', () => {
  const video = document.getElementById('bg-video');
  
    // Ensure video starts as soon as the page is loaded
    video.play().catch((error) => {
      console.error("Error playing video automatically:", error);
    });
    
    video.addEventListener('ended', function() {
      console.log("The video has finished playing.");
      video.classList.add("fade-out")
    });
});
