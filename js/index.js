function detectInitialScroll() {
  const scrollBox = document.getElementById("scroll-box");
  const scrollPosition = window.scrollY;

  // Add scrolled class to "Scroll Down to see more" box after user scroll.
  if (scrollPosition > 0) {
    scrollBox.classList.add("scrolled");
  } else {
    scrollBox.classList.remove("scrolled");
  }

  const container = document.getElementById("home-section-2");

  const progress = detectScrollProgressForContainer(
    container,
    container.clientHeight * 0.1,
    scrollPosition
  );

  if (progress > 0) {
    setVideoProgress(progress);
  }
}

// Check the scroll progress for the container. Return percentage of progress.
function detectScrollProgressForContainer(container, offset, currentScroll) {
  const containerPosition = container.offsetTop;
  const visibleScrollPosition = container.offsetTop - window.innerHeight;

  const startEffectPosition = visibleScrollPosition + offset;
  const totalEffectHeight = containerPosition;
  const endEffectPosition = startEffectPosition + totalEffectHeight;

  if (
    currentScroll >= startEffectPosition &&
    currentScroll <= endEffectPosition
  ) {
    const progressPx = currentScroll - startEffectPosition;
    return progressPx / totalEffectHeight;
  }
  return 0;
}

// Set video play time by scroll progress
function setVideoProgress(progress) {
  const video = document.getElementById("home-section-2-bg");
  video.currentTime = progress * video.duration;
}

window.onscroll = detectInitialScroll;
