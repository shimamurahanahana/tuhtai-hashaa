// Before / after comparison slider
(function () {
  const range = document.getElementById('compareRange');
  const before = document.getElementById('compareBefore');
  const handle = document.getElementById('compareHandle');
  if (!range || !before || !handle) return;

  function update() {
    const v = range.value;
    before.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
    handle.style.left = v + '%';
  }

  range.addEventListener('input', update);
  update();
})();
