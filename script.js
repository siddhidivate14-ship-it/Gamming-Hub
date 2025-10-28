document.querySelector('.btn').addEventListener('click', () => {
  alert("Explore Games section coming soon!");
});
// 🔍 Game Search Filter
const searchInput = document.getElementById("gameSearch");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(filter) ? "" : "none";
    });
  });
}
// 🕓 Scroll animation for events
const cards = document.querySelectorAll(".event-card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";
});
// 🌈 Glow effect for social icons
const icons = document.querySelectorAll('.social-icons a img');
icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.filter = 'drop-shadow(0 0 25px var(--secondary))';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.filter = 'drop-shadow(0 0 10px var(--primary))';
  });
});
/* 🖼️ GALLERY PAGE */
// 🖼️ Lightbox Feature
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

