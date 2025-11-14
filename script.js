function go(link) {
  // Sau này bạn chỉ cần thay 'LINK...' bằng link thật
  window.location.href = link;
}
const scaleSelect = document.getElementById('scaleSelect');
scaleSelect.addEventListener('change', (e) => {
document.body.style.transform = `scale(${e.target.value})`;
document.body.style.transformOrigin = 'top center';
});
  
