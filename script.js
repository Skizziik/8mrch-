const petalsContainer = document.querySelector(".petals");
const revealItems = document.querySelectorAll(".reveal");

if (petalsContainer) {
  const petalCount = window.innerWidth < 720 ? 14 : 24;

  for (let index = 0; index < petalCount; index += 1) {
    const petal = document.createElement("span");
    const duration = 10 + Math.random() * 12;
    const delay = Math.random() * -18;
    const left = Math.random() * 100;
    const scale = 0.7 + Math.random() * 1.1;
    const drift = -40 + Math.random() * 80;
    const startRotation = Math.random() * 80;
    const endRotation = startRotation + 240 + Math.random() * 220;

    petal.className = "petal";
    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.opacity = `${0.4 + Math.random() * 0.5}`;
    petal.style.setProperty("--scale", `${scale}`);
    petal.style.setProperty("--drift-x", `${drift}px`);
    petal.style.setProperty("--twist-start", `${startRotation}deg`);
    petal.style.setProperty("--twist-end", `${endRotation}deg`);

    petalsContainer.appendChild(petal);
  }
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
