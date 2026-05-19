// ── SCROLL ANIMATION ──
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
sections.forEach(s => observer.observe(s));

// ── AVATAR UPLOAD ──
document.getElementById('avatarInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = document.getElementById('avatarImg');
    img.src = event.target.result;
    img.onload = function() {
      document.getElementById('avatarFrame').style.width = 'auto';
    };
  };
  reader.readAsDataURL(file);
});

// ── MODAL PREVIEW ──
function openModal(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('previewModal').classList.add('open');
}

function closeModal() {
  document.getElementById('previewModal').classList.remove('open');
  document.getElementById('modalImg').src = '';
}

document.getElementById('previewModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
