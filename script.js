const progress = document.querySelector(".progress span");
const reveals = document.querySelectorAll(".reveal");
const cover = document.querySelector(".cover");
const agentRush = document.querySelector(".agent-rush");
const agentDepth = document.querySelector(".agent-depth");
const agentCards = [...document.querySelectorAll(".agent-card")];
let agentFrame = null;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target === agentRush) {
          agentRush.classList.add("is-running");
          if (!agentFrame) {
            tickAgents();
          }
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

function updateAgentDepth() {
  if (!agentDepth || !agentCards.length || !agentRush?.classList.contains("is-running")) return;

  const depthRect = agentDepth.getBoundingClientRect();
  const visibleHeight = Math.max(depthRect.height, 1);

  agentCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const flow = Math.min(Math.max((center - depthRect.top) / visibleHeight, 0), 1);
    const scale = 1.2 - flow * 0.48;
    const blur = flow * 5.8;
    const opacity = 0.98 - flow * 0.6;

    card.style.setProperty("--flow-scale", scale.toFixed(3));
    card.style.setProperty("--flow-blur", `${blur.toFixed(2)}px`);
    card.style.setProperty("--flow-opacity", opacity.toFixed(3));
  });
}

function tickAgents() {
  updateAgentDepth();
  agentFrame = window.requestAnimationFrame(tickAgents);
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", () => {
  updateProgress();
  updateAgentDepth();
});
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
