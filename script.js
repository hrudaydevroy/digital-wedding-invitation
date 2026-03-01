/* ================================
   GOOGLE MAP NAVIGATION
================================ */

function navigate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const destination = "8WW7+55H, Gudem, Andhra Pradesh 532484";

      window.open(
        `https://www.google.com/maps/dir/${lat},${lng}/${destination}`,
        "_blank"
      );
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

/* ================================
   DYNAMIC COUNTDOWN
================================ */

const weddingDate = new Date("April 11, 2026 00:15:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML =
      "<h2>💍 Today is the Wedding Day 💍<br>Welcome to our Forever ❤️</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ================================
   QR AUTO UPDATE AFTER DEPLOY
================================ */

window.addEventListener("load", () => {
  const currentURL = window.location.href;
  const qrImage = document.getElementById("qrImage");

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(currentURL);
});

/* ================================
   STORY SCROLL ANIMATION
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const storyCards = document.querySelectorAll(".story-card");

  const storyObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          storyObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  storyCards.forEach(card => storyObserver.observe(card));
});

/* ================================
   LIGHTBOX
================================ */

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* ================================
   PRE-WEDDING SLIDER
================================ */

const pwTrack = document.querySelector(".pw-slider-track");
const pwCards = document.querySelectorAll(".pw-card");

let pwIndex = Math.floor(pwCards.length / 2);

function pwUpdate() {
  pwCards.forEach(card => card.classList.remove("active"));
  pwCards[pwIndex].classList.add("active");

  const cardWidth = pwCards[0].offsetWidth + 30;
  const centerOffset =
    pwIndex * cardWidth -
    pwTrack.parentElement.offsetWidth / 2 +
    cardWidth / 2;

  pwTrack.style.transform = `translateX(${-centerOffset}px)`;
}

function pwSlideLeft() {
  if (pwIndex > 0) {
    pwIndex--;
    pwUpdate();
  }
}

function pwSlideRight() {
  if (pwIndex < pwCards.length - 1) {
    pwIndex++;
    pwUpdate();
  }
}

window.addEventListener("resize", pwUpdate);
pwUpdate();

/* ================================
   NAVBAR SCROLL EFFECT
================================ */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================================
   RSVP
================================ */

document.getElementById("rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("💖 Thank you for confirming. See you at the wedding!");
});

/* ================================
   DARK MODE
================================ */

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* ================================
   WHATSAPP SHARE
================================ */

function shareWhatsApp() {
  const text = 
`💍 Wedding Invitation 💍
📅 11 April 2026
📍 8WW7+55H, Gudem, Andhra Pradesh 532484

Join us to celebrate ❤️
👉 ${window.location.href}`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

/* ================================
   PHOTO PREVIEW
================================ */

/* fixed gallery button behavior */
const galleryBtn = document.getElementById("galleryBtn");
if (galleryBtn) {
  galleryBtn.addEventListener("click", () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  });
}


function previewPhoto(event){
  const img = document.createElement("img");
  img.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById("preview").innerHTML = "";
  document.getElementById("preview").appendChild(img);
}

/* ================================
   VOICE RECORD
================================ */

let recorder, audioChunks = [];

async function startRecording(){
  const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
  recorder = new MediaRecorder(stream);
  recorder.start();

  recorder.ondataavailable = e => audioChunks.push(e.data);
}

function stopRecording(){
  recorder.stop();
  recorder.onstop = () => {
    const audioBlob = new Blob(audioChunks);
    const audioUrl = URL.createObjectURL(audioBlob);
    document.getElementById("voicePlayback").src = audioUrl;
    audioChunks = [];
  };
}
/* ================================
   TRACK SECTION SCROLL ANIMATION
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const timelineCards = document.querySelectorAll(".timeline .card");

  const timelineObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineCards.forEach(card => {
    timelineObserver.observe(card);
  });

});