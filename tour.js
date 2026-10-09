const stepButtons = [...document.querySelectorAll('[data-step]')];
const panels = [...document.querySelectorAll('[data-panel]')];
const validSteps = new Set(['capture', 'retrieve', 'ship']);

function showStep(step, { updateHash = true, moveFocus = false } = {}) {
  if (!validSteps.has(step)) return;
  for (const button of stepButtons) {
    const selected = button.dataset.step === step;
    button.classList.toggle('active', selected);
    if (selected) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  }
  for (const panel of panels) panel.hidden = panel.dataset.panel !== step;
  if (updateHash) history.replaceState(null, '', `#${step}`);
  if (moveFocus) document.querySelector(`[data-panel="${step}"] h3`).focus({ preventScroll: true });
}

for (const button of stepButtons) button.addEventListener('click', () => showStep(button.dataset.step));
for (const button of document.querySelectorAll('[data-next]')) {
  button.addEventListener('click', () => {
    showStep(button.dataset.next, { moveFocus: false });
    document.getElementById('tour').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const initialStep = location.hash.slice(1);
if (validSteps.has(initialStep)) showStep(initialStep, { updateHash: false });
window.addEventListener('hashchange', () => {
  const step = location.hash.slice(1);
  if (validSteps.has(step)) showStep(step, { updateHash: false });
});

const answer = document.getElementById('answer');
const choices = [...document.querySelectorAll('[data-answer]')];
for (const choice of choices) {
  choice.addEventListener('click', () => {
    const correct = choice.dataset.answer === '60';
    for (const candidate of choices) {
      candidate.classList.toggle('chosen', candidate === choice);
      candidate.setAttribute('aria-pressed', String(candidate === choice));
    }
    answer.hidden = false;
    answer.className = `answer ${correct ? 'right' : 'wrong'}`;
    answer.textContent = correct
      ? 'Exactly. Ajit corrects the earlier 15-minute estimate: the timer is 1 hour. The team agrees to proceed without the locks.'
      : 'The meeting starts with a 15-minute estimate. Ajit corrects it to 1 hour before they agree to proceed without the locks.';
  });
}
