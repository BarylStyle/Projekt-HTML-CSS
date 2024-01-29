(() => {
  const refs = {
    openModalBtn: document.querySelector('[follow-modal-open]'),
    closeModalBtn: document.querySelector('[follow-modal-close]'),
    modal: document.querySelector('[follow-data-modal]'),
    emailInput: document.getElementById('email'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.emailInput.addEventListener('input', validateEmail);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function validateEmail() {
    const email = refs.emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      refs.emailInput.style.borderColor = 'green';
    } else {
      refs.emailInput.style.borderColor = 'red';
    }
  }
})();
