document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Preset credentials
  const users = {
    owner: { username: 'ManKush', password: 'manelias@2025', redirect: 'dashboard-owner.html' },
    attendantA: { username: 'MurangaAttendant', password: 'muranga@kush', redirect: 'stock-update.html' },
    attendantB: { username: 'KahawaAttendee', password: 'kahawa@kush', redirect: 'stock-update.html' },
    attendantC: { username: 'ByPassAttendant', password: 'pass@kush', redirect: 'stock-update.html' },
    attendantD: { username: 'kimboattendee', password: 'kimbo@kush', redirect: 'stock-update.html' }
  };

  let validLogin = false;

  // Check each user
  for (const key in users) {
    const user = users[key];
    if (user.username === username && user.password === password) {
      window.location.href = user.redirect;
      validLogin = true;
      break;
    }
  }

  if (!validLogin) {
    document.getElementById('error-message').innerText = 'Invalid credentials';
  }
});
