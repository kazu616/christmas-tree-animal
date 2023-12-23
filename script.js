const nextXmasDate = (currentTime) => {
  let xmasDate = new Date(currentTime.getFullYear() + "-12-25T00:00:00");
  if (currentTime.getTime() > xmasDate.getTime()) {
    let nextYear = currentTime.getFullYear() + 1;
    xmasDate = new Date(nextYear + "-12-25T00:00:00");
  }
  return xmasDate;
};
document.addEventListener('click', function () {
  var audio = document.getElementById('myAudio');
  audio.play();
});

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  let nextXmas = nextXmasDate(new Date()).getTime() / 1000;

  // Set up FlipDown
  let flipdown = new FlipDown(nextXmas)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });
});
anime({
  targets: '#image1',
  translateY: [anime.stagger(10), 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: anime.stagger(100),
});

// Set up flip down animation for image 2
anime({
  targets: '#image2',
  translateY: [anime.stagger(10), 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: anime.stagger(100),
});
