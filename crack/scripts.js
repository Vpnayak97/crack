// scripts.js

console.log("CRACK site loaded");

// --- your future JS code goes below this line ---
function openModal(course = '') {
  const modal = document.getElementById('registrationModal');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('course').value = course;
}

function closeModal() {
  const modal = document.getElementById('registrationModal');
  modal.setAttribute('aria-hidden', 'true');
}

window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function handleRegistration(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value.trim();

  if (!name || !email || !phone) { alert('Please fill all fields'); return; }

  const registration = { name, email, phone, course, date: new Date().toLocaleString() };
  let all = JSON.parse(localStorage.getItem('registrations') || '[]');
  all.push(registration);
  localStorage.setItem('registrations', JSON.stringify(all));

  const mailtoLink = `mailto:organizer@crack.example?subject=New Registration - ${course}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}`;
  window.open(mailtoLink);

  alert('Registration saved! Please check your email app to confirm.');
  closeModal();
}

function exportCSV() {
  const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
  if (!registrations.length) { alert('No data to export'); return; }
  const csv = 'Name,Email,Phone,Course,Date\n' + registrations.map(r => `${r.name},${r.email},${r.phone},${r.course},${r.date}`).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'registrations.csv';
  a.click();
  // Placeholder for any interactivity


}
