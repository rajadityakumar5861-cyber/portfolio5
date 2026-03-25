// MENU
function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

// TAB SWITCH
function showTab(tabId, el) {
    let tabs = document.querySelectorAll(".tab");
    let links = document.querySelectorAll("nav a");

    tabs.forEach(tab => tab.classList.remove("active"));
    links.forEach(link => link.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");

    if (el) el.classList.add("active");

    document.getElementById("nav").classList.remove("show");
}

// TYPING EFFECT
let text = ["Web Developer", "Designer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// 🌌 PARTICLES
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();