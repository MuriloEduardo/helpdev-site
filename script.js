scrolled = (nav) => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
};

window.onload = () => {
  const nav = document.getElementById('navbar-main');

  scrolled(nav);

  window.onscroll = () => {
    scrolled(nav);
  };

  document
    .getElementById('contact-form')
    .addEventListener('submit', function (e) {
      e.preventDefault();

      fetch('./send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
        }),
      }).then((res) => {
        document.getElementById('success-contact').classList.remove('d-none');
      });
    });
};
