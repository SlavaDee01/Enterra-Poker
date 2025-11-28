

document.addEventListener("scroll", () => {
  const block = document.querySelector('.parallax-video');
  if (!block) return;

  const rect = block.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (isVisible) {
    block.classList.add("parallax-active");
  } else {
    block.classList.remove("parallax-active");
  }
});


