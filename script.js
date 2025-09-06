// Load Lottie Animation
var robotAnim = lottie.loadAnimation({
  container: document.getElementById("robot"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/assets/waving.json"
});

// Tombol navigasi
const seeBtn = document.getElementById("seeBtn");
const backBtn = document.getElementById("backBtn");

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

seeBtn.addEventListener("click", () => {
  slide1.style.transform = "scale(0.8)";
  slide1.style.opacity = "0";
  setTimeout(() => {
    slide1.classList.remove("active");
    slide2.classList.add("active");
    slide2.style.transform = "scale(1.2)";
    slide2.style.opacity = "0";
    setTimeout(() => {
      slide2.style.transform = "scale(1)";
      slide2.style.opacity = "1";
    }, 50);
  }, 500);
});

backBtn.addEventListener("click", () => {
  slide2.style.transform = "scale(0.8)";
  slide2.style.opacity = "0";
  setTimeout(() => {
    slide2.classList.remove("active");
    slide1.classList.add("active");
    slide1.style.transform = "scale(1.2)";
    slide1.style.opacity = "0";
    setTimeout(() => {
      slide1.style.transform = "scale(1)";
      slide1.style.opacity = "1";
    }, 50);
  }, 500);
});
