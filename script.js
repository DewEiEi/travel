const slides = document.querySelectorAll("#slider .slide");
const dotsBox = document.getElementById("dots");
let current = 0;
let timer;

slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => { goTo(i); restart(); });
    dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll(".dot");

function goTo(n) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
}

function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 3000);
}

document.getElementById("prevBtn").addEventListener("click", () => { goTo(current - 1); restart(); });
document.getElementById("nextBtn").addEventListener("click", () => { goTo(current + 1); restart(); });

// หยุดเมื่อเอาเมาส์ไปวางบนภาพ
const slider = document.getElementById("slider");
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", restart);

restart();