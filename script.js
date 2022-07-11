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

      let loading = document.getElementById('loader-sending');
      let successMessage = document.getElementById('success-contact');
      let btnSubmit = document.getElementById('btn-submit');

      loading.classList.remove('d-none');

      btnSubmit.setAttribute('disabled', 'disabled');

      fetch('./send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
        }),
      }).then(() => {
        loading.classList.add('d-none');

        btnSubmit.removeAttribute('disabled');

        successMessage.classList.remove('d-none');

        setTimeout(() => {
          successMessage.classList.add('d-none');
        }, 5000);
      });
    });
};
