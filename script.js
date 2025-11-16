function go(link) {
  // Mở liên kết trong một tab/cửa sổ mới
  // Tham số thứ hai '_blank' quy định việc này
  window.open(link, '_blank');
}

const scaleSelect = document.getElementById('scaleSelect');
scaleSelect.addEventListener('change', (e) => {
  document.body.style.transform = `scale(${e.target.value})`;
  document.body.style.transformOrigin = 'top center';
});
