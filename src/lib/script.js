  let current = 1;
  const total = 10;

  function changeSlide(dir) {
    const old = document.getElementById('slide-' + current);
    old.classList.remove('active');
    current = Math.max(1, Math.min(total, current + dir));
    const next = document.getElementById('slide-' + current);
    next.classList.add('active');
    document.getElementById('navCounter').textContent = 
      String(current).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
    document.getElementById('slideNum').textContent = 
      String(current).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
    document.getElementById('progress').style.width = (current / total * 100) + '%';
    document.getElementById('btnPrev').disabled = current === 1;
    document.getElementById('btnNext').disabled = current === total;
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      if (current < total) changeSlide(1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (current > 1) changeSlide(-1);
    }
  });

  // Init progress
  document.getElementById('progress').style.width = (1 / total * 100) + '%';