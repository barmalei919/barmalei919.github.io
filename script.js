const lines = [
  'Java Backend Developer',
  '2 года разработки на Java',
  'Spring Boot · PostgreSQL · Redis · Testcontainers',
  'Открыт к предложениям'
];
const terminal = document.getElementById('terminal');
let lineIdx = 0, charIdx = 0;

function type() {
  if (lineIdx >= lines.length) lineIdx = 0;
  if (charIdx <= lines[lineIdx].length) {
    terminal.innerHTML = lines[lineIdx].slice(0, charIdx) + '<span class="cursor"></span>';
    charIdx++;
    setTimeout(type, 55);
  } else {
    setTimeout(() => {
      charIdx = 0;
      lineIdx++;
      terminal.innerHTML = '<span class="cursor"></span>';
      setTimeout(type, 400);
    }, 2200);
  }
}
type();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  progress.style.width = (total > 0 ? doc.scrollTop / total * 100 : 0) + '%';
}, { passive: true });
