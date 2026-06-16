const progress = document.querySelector(".progress span");
const reveals = document.querySelectorAll(".reveal");
const cover = document.querySelector(".cover");
const agentRush = document.querySelector(".agent-rush");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target === agentRush) {
          agentRush.classList.add("is-running");
        }
      }
    });
  },
  { threshold: 0.32 }
);

reveals.forEach((section) => observer.observe(section));

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const value = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
  document.documentElement.style.setProperty("--scroll-progress", value.toFixed(4));
  if (progress) {
    progress.style.width = `${value * 100}%`;
  }
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

function startCover() {
  if (!cover || cover.classList.contains("cover-started")) return;
  cover.classList.add("cover-started");
}

cover?.addEventListener("click", startCover);
cover?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    startCover();
  }
});
